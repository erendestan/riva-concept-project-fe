import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'
import ReservationDetailsForm from "./ReservationDetailsForm";
import { toast } from "react-hot-toast";

const containerStyle = {
  overflowY: 'auto',
  marginTop: '70px',
  marginBottom: '20px'
};

function ReservationCalendar() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    // Handle the date click event
    const clickedDate = arg.date;
    const currentDate = new Date();
    const nextTwoDays = new Date();
    nextTwoDays.setDate(currentDate.getDate() + 2);

    // Check if the selected date is today or in the past
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
    // Close the event form
    setShowEventForm(false);
  };

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
      />
      {showEventForm && (
        <ReservationDetailsForm
          selectedDate={selectedDate}
          onClose={handleEventFormClose}
        />
      )}
    </div>
  )
}

export default ReservationCalendar;
