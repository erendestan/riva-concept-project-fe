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

function ReservationCalendar() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [clickedReservationId, setClickedReservationId] = useState(null);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsData = await ReservationAPI.getAllReservations();
        setReservations(reservationsData);
        // console.log(reservationsData) //--> Debug
      } catch (error) {
        console.error('Error fetching reservations data:', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div style={containerStyle}>
      <div className='row'>
        <button className="col-2 btn btn-success mt-3 mb-1"
            onClick={handleAddEventButtonClick}>
            Add Event
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
        />
        {showEventForm && (
          <ReservationDetailsForm
            selectedDate={selectedDate}
            onClose={handleEventFormClose}
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
          />
        )}
      </div>
    </div>
  );
}

export default ReservationCalendar;
