// ReservationCalendar.jsx
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'
import ReservationDetailsForm from "./ReservationDetailsForm";
import { toast } from "react-hot-toast";
import UserAPI from '../api/UserApi';
import ReservationAPI from '../api/ReservationAPI';

const containerStyle = {
  overflowY: 'auto',
  marginTop: '70px',
  marginBottom: '20px'
};

function ReservationCalendar() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservations, setReservations] = useState([]);

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
      setSelectedDate(clickedDate);
      setShowEventForm(true);
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
  
  const eventContent = ({ event, timeText }) => (
        <div className='col-12'>
          {event.title}
        </div>
  );

  return (
    <div style={containerStyle}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
        initialView={'multiMonthYear'}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "multiMonthYear, dayGridMonth, dayGridWeek"
        }}
        dateClick={(info) => handleDateClick(info)}
        events={eventList}
        eventContent={eventContent}
        dayMaxEventRows={2} // Adjust as needed
        dayMaxEvents={4}    // Adjust as needed
      />
      {showEventForm && (
        <ReservationDetailsForm
          selectedDate={selectedDate}
          onClose={handleEventFormClose}
        />
      )}
    </div>
  );
}

export default ReservationCalendar;
