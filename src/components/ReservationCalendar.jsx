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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const reservationsData = await ReservationAPI.getAllReservations();
  //       setReservations(reservationsData);
  //       // console.log(reservationsData) //--> Debug
  //     } catch (error) {
  //       console.error('Error fetching reservations data:', error);
  //     }
      
  //   };

  //   fetchData();
  // }, []);
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
          // startDateFilter,
          // endDateFilter
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

      if(isDateTaken){
        toast.error("Selected date is already taken. Please choose another date.")
      }else{
        setSelectedDate(clickedDate);
        setShowEventForm(true); 
      }
    }
  };

  const handleEventFormClose = () => {
    setShowEventForm(false);
  };

  // const getUserFullNameWithTime = (reservation) => {
  //   const user = reservation.user;
  //   const startTime = reservation.startTime;
  //   const endTime = reservation.endTime;
  //   const fullName = user ? `${user.firstName} ${user.lastName}` : 'Unknown User';
  
  //   return `${startTime} - ${endTime} ${fullName}`;
  // };

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
        <div className='col-12'>
          {event.title}
        </div>
  );

  const handleEventClick = (arg) => {
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
      // const filteredReservationsData = await ReservationAPI.getFilteredReservations(filters);
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

  const handleFilterChange = () => {
    // Implement the logic for applying filters
    // You can use setEventTypeFilter, setStartDateFilter, and setEndDateFilter here
    // For example, you can make an API call to fetch filtered reservations
    // and update the state with the new data.
    fetchReservationsData({
      eventType: eventTypeFilter,
      startDate: startDateFilter,
      endDate: endDateFilter,
    });
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDateFilter(selectedStartDate);

    // If an end date is already selected and it is earlier than the start date, show a toast error
    if (endDateFilter && selectedStartDate > endDateFilter) {
      toast.error('End date cannot be earlier than the start date.');
      setEndDateFilter(null); // Reset end date
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
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
        {/* <label className="col-3">
          Event Type:
          <select value={eventTypeFilter} onChange={(e) => setEventTypeFilter(e.target.value)}>
            <option value="WEDDING">Wedding</option>
            <option value="GRADUATION_CEREMONY">Graduation Ceremony</option>
            <option value="COCKTAIL_EVENT">Cocktail Event</option>
            <option value="OTHER">Other</option>
        </select>
        </label> */}
        <label className="col-3">
        Start Date:
        <input id="startDateInput" type="date" value={startDateFilter} onChange={handleStartDateChange} />
      </label>
      <label className="col-3">
        End Date:
        <input id="endDateInput" type="date" value={endDateFilter} onChange={handleEndDateChange} />
      </label>
        {/* <label className="col-3">
          Start Date:
          <input type="date" value={startDateFilter} onChange={(e) => setStartDateFilter(e.target.value)} />
        </label>
        <label className="col-3">
          End Date:
          <input type="date" value={endDateFilter} onChange={(e) => setEndDateFilter(e.target.value)} />
        </label> */}
        {/* <button className="col-2 btn btn-primary mt-3 mb-1" onClick={handleFilterChange}>
          Apply Filters
        </button> */}
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
          // validRange={{
          //   start: startDateFilter ? startDateFilter : null,
          //   end: endDateFilter ? endDateFilter : null,
          // }}
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
            // onSave={handleAddEvent}
            isAddEventButtonClicked={true}
            userItems={userItems}
          />
        )}
      </div>
    </div>
  );
}

export default ReservationCalendar;
