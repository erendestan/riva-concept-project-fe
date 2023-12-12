// ReservationCalendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import multiMonthPlugin from '@fullcalendar/multimonth'

import { Calendar } from '@fullcalendar/core'

const containerStyle = {
 // Change this value to your desired maximum height
    overflowY: 'auto',
    marginTop: '70px',
    marginBottom: '20px'
  };

function ReservationCalendar(){
    return(
        <div style={containerStyle}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
                initialView={'multiMonthYear'}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "multiMonthYear, dayGridMonth, dayGridWeek"
            }}
            
            />
        </div>
    )  
}

export default ReservationCalendar;