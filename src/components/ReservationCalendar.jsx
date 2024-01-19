// ReservationCalendar.jsx
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'
import ReservationDetailsForm from "./ReservationDetailsForm";
import ReservationDetailsModal from './ReservationDetailsModal';
import { toast } from "react-hot-toast";
import UserAPI from '../api/UserApi';
import ReservationAPI from '../api/ReservationAPI';
import { info } from 'autoprefixer';
import TokenManager from '../api/TokenManager';



const containerStyle = {
  overflowY: 'auto',
  marginTop: '70px',
  marginBottom: '20px'
};

function ReservationCalendar(props) {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [clickedReservationId, setClickedReservationId] = useState(null);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const [eventTypeFilter, setEventTypeFilter] = useState(null);
  const [startDateFilter, setStartDateFilter] = useState(null);
  const [endDateFilter, setEndDateFilter] = useState(null);

    const {userItems}  = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Calling API...');
        console.log('ReservationAPI:', ReservationAPI);

        // Convert startDateFilter and endDateFilter to ISOString if not null
        const formattedStartDate = startDateFilter ? new Date(startDateFilter).toISOString() : null;
        const formattedEndDate = endDateFilter ? new Date(endDateFilter).toISOString() : null;
  
        const filteredReservationsData = await ReservationAPI.getFilteredReservations(
          eventTypeFilter,
          formattedStartDate,
          formattedEndDate
        );
          
        setReservations(filteredReservationsData);

      } catch (error) {
        console.error('Error fetching filtered reservations data:', error);
      }
    };
  
    fetchData();
  }, [eventTypeFilter, startDateFilter, endDateFilter]);

  const handleDateClick = (arg) => {
    const clickedDate = arg.date;
    const currentDate = new Date();
    const nextTwoDays = new Date();
    nextTwoDays.setDate(currentDate.getDate() + 2);
  
    // Check if the clicked date is within the specified range
    if (
      (!startDateFilter || clickedDate >= new Date(startDateFilter)) &&
      (!endDateFilter || clickedDate <= new Date(endDateFilter))
    ) {
      // Check if the clicked date is today or in the past
      if (
        clickedDate.getFullYear() === currentDate.getFullYear() &&
        clickedDate.getMonth() === currentDate.getMonth() &&
        clickedDate.getDate() === currentDate.getDate() ||
        clickedDate < currentDate
      ) {
        toast.error('Selected date cannot be today or in the past!');
      } else if (clickedDate < nextTwoDays) {
        toast.error('Reservations for the next 2 days are not possible due to preparation times.');
      } else {
        // Check if there is a reservation on the selected date
        const isDateTaken = reservations.some(
          (reservation) =>
            new Date(reservation.reservationDate).toDateString() === clickedDate.toDateString()
        );
  
        if (isDateTaken) {
          toast.error('Selected date is already taken. Please choose another date.');
        } else {
          setSelectedDate(clickedDate);
          setShowEventForm(true);
        }
      }
    } else {
      toast.error('Selected date is outside the valid range. Please choose a date within the specified range.');
    }
  };

  const handleEventFormClose = () => {
    setShowEventForm(false);
  };

  const getEventListTitle = (reservation) => {
    const user = reservation.user;
    const fullName = user ? `${user.firstName} ${user.lastName}` : 'Unknown User';
  
    return `${fullName}`;
  };

  const eventList = reservations.map((reservation) => ({
    title: getEventListTitle(reservation),
    start: reservation.reservationDate,
    end: reservation.endTime, // Adjust as needed
    id: reservation.reservationId,
    user: reservation.user
  }));
  
  const eventContent = ({ event }) => (
        <div style={{ fontWeight: 'bold' }} className='col-12'>
          {event.title}
        </div>
  );

  const dayCellContent = ({ date }) => {
    const cellDate = new Date(date);
  
    let cellContent = (
      <div>
        <span>{cellDate.getDate()}</span>
      </div>
    );
  
    // Check if the cell date falls within the selected range
    if (startDateFilter && endDateFilter) {
      const start = new Date(startDateFilter);
      const end = new Date(endDateFilter);
  
      // Set the time to the end of the day for proper comparison
      end.setHours(23, 59, 59, 999);
  
      if (cellDate >= start && cellDate <= end) {
        // Entire cell date falls within the selected range
        cellContent = (
          <div style={{ background: 'palegreen', borderRadius: '0%', height: '100%', width: '100%' }}>
            {cellContent}
          </div>
        );
      }
    } else if (startDateFilter && cellDate >= new Date(startDateFilter)) {
      // Only the start date is selected
      cellContent = (
        <div style={{ background: 'palegreen', borderRadius: '0%', height: '100%', width: '100%' }}>
          {cellContent}
        </div>
      );
    } else if (endDateFilter && cellDate <= new Date(endDateFilter)) {
      // Only the end date is selected
      cellContent = (
        <div style={{ background: 'palegreen', borderRadius: '50%', height: '100%', width: '100%' }}>
          {cellContent}
        </div>
      );
    }
  
    return cellContent;
  };
  
  const handleEventClick = (arg) => {
    console.log('Logged-in user ID:', TokenManager.getClaims()?.userId);
    console.log('Selected reservation owner ID:', arg.event.extendedProps.user.id);
  
    // Continue with the existing logic
    const reservationId = arg.event.id;
    setClickedReservationId(reservationId);
  };

  const handleReservationModalClose = () => {
    setClickedReservationId(null);
  };

  const handleAddEventButtonClick = () => {
    setShowAddEventModal(true);
  };

  const handleAddEventModalClose = () => {
    setShowAddEventModal(false);
  };

  const fetchReservationsData = async (filters) => {
    try {
      // Fetch filtered reservations based on selected filters
      const filteredReservationsData = await ReservationAPI.getFilteredReservations(
        filters.eventType,
        filters.startDate,
        filters.endDate
      );
  
  
      setReservations(filteredReservationsData);
    } catch (error) {
      console.error('Error fetching filtered reservations data:', error);
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    console.log('Selected Start Date:', selectedStartDate);
    setStartDateFilter(selectedStartDate);

    // If an end date is already selected and it is earlier than the start date, show a toast error
    if (endDateFilter && selectedStartDate > endDateFilter) {
      toast.error('End date cannot be earlier than the start date.');
      setEndDateFilter(null); // Reset end date
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    console.log('Selected End Date:', selectedEndDate);
    setEndDateFilter(selectedEndDate);

    // If a start date is selected and the end date is earlier than the start date, show a toast error
    if (startDateFilter && selectedEndDate < startDateFilter) {
      toast.error('End date cannot be earlier than the start date.');
      setEndDateFilter(null); // Reset end date
    }
  };

  const handleReset = () => {
    // Implement the logic for resetting filters
    // You can reset eventTypeFilter, startDateFilter, and endDateFilter here
    setEventTypeFilter(null);
    setStartDateFilter(null);
    setEndDateFilter(null);
    document.getElementById('startDateInput').value = '';
    document.getElementById('endDateInput').value = '';
    // You may want to refetch the data without filters or apply a default set of filters.
    fetchReservationsData({});
  };

  const isDateSelectable = (start, end) => {
    if (startDateFilter && endDateFilter) {
      const startRange = new Date(startDateFilter);
      const endRange = new Date(endDateFilter);
      endRange.setHours(23, 59, 59, 999);
  
      // Check if the date range falls within the specified filters
      if (start >= startRange && end <= endRange && start <= endRange) {
        // Check if there is a reservation on any date within the selected range
        const hasReservationWithinRange = reservations.some(
          (reservation) =>
            new Date(reservation.reservationDate) >= start && new Date(reservation.reservationDate) <= end
        );
  
        // Check if the selected date is today or in the next two days
        const currentDate = new Date();
        const nextTwoDays = new Date();
        nextTwoDays.setDate(currentDate.getDate() + 2);
  
        if (start < nextTwoDays) {
          toast.error('Reservations for the next 2 days are not possible due to preparation times.');
          return false;
        }
  
        return !hasReservationWithinRange;
      }
    }
  
    return false;
  };

  const handleDateRangeSelection = (selectInfo) => {
    const { start, end } = selectInfo;
  
    // Validate the selected range against the specified filters
    if (isDateSelectable(start, end)) {
      // Process the selected range (e.g., show a form)
      setSelectedDate(start);
      setShowEventForm(true);
    } else {
      // Display a toast for an invalid selection
      toast.error('Invalid date range selection. Please choose a valid range.');
    }
  };


  return (
    <div style={containerStyle}>
      <div className='row'>
        <button className="col-2 btn btn-success mt-3 mb-1"
            onClick={handleAddEventButtonClick}>
            Add Event
        </button>
      </div>
      {/* Filter Controls */}
      <div className="row">
      <label className="col-3">
        Event Type:
        <select value={eventTypeFilter || ''} onChange={(e) => setEventTypeFilter(e.target.value)}>
          <option value="" disabled>Select event type</option>
          <option value="WEDDING">Wedding</option>
          <option value="GRADUATION_CEREMONY">Graduation Ceremony</option>
          <option value="COCKTAIL_EVENT">Cocktail Event</option>
          <option value="OTHER">Other</option>
        </select>
      </label>
        <label className="col-3">
        Start Date:
        <input id="startDateInput" type="date" value={startDateFilter} onChange={handleStartDateChange} />
      </label>
      <label className="col-3">
        End Date:
        <input id="endDateInput" type="date" value={endDateFilter} onChange={handleEndDateChange} />
      </label>
        <button className="col-3 btn btn-secondary mt-3 mb-1" onClick={handleReset}>
          Reset Filters
        </button>
      </div>
      <div className='row'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
          initialView={'multiMonthYear'}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "multiMonthYear dayGridMonth dayGridWeek",
          }}
          dateClick={(info) => handleDateClick(info)}
          events={eventList}
          eventContent={eventContent}
          eventClick={(info) => handleEventClick(info)}
          dayCellContent={dayCellContent}
          selectable={true}
          select={(info) => handleDateRangeSelection(info)}
          selectAllow={(selectInfo) => isDateSelectable(selectInfo.start, selectInfo.end)}
        />
        {showEventForm && (
          <ReservationDetailsForm
            selectedDate={selectedDate}
            onClose={handleEventFormClose}
            userItems={userItems}
          />
        )}
        {clickedReservationId && (
          <ReservationDetailsModal
            reservationId={clickedReservationId}
            onClose={handleReservationModalClose}
          />
        )}
        {showAddEventModal && (
          <ReservationDetailsForm
            selectedDate={selectedDate}
            onClose={handleAddEventModalClose}
            isAddEventButtonClicked={true}
            userItems={userItems}
          />
        )}
      </div>
    </div>
  );
}

export default ReservationCalendar;
