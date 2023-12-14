import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import CustomModal from './CustomModal';

const ReservationDetailsForm = ({ selectedDate, onClose, onSave, isAddEventButtonClicked }) => {
  const [eventType, setEventType] = useState('WEDDING');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFormDate, setSelectedFormDate] = useState(
    isAddEventButtonClicked ? new Date() : selectedDate || new Date()
  );

  const handleSave = () => {
    // Add your logic to save the event details
    // For example, you can send the details to your backend
    console.log('Event Details:', {
      date: selectedDate,
      eventType,
      startTime,
      endTime,
    });

    // Close the form
    onClose();
  };

  return (
    <CustomModal
      isOpen={true} // Set to true to make the modal visible
      toggle={onClose}
      title="Create Event"
      submitText="Save Event"
      onCancel={onClose}
      onSubmit={handleSave}
    >
      <div>
      {!isAddEventButtonClicked ? (
          <p>Date: {selectedFormDate && selectedFormDate.toLocaleDateString()}</p>
        ) : (
          <label>
            Select Date:
            <input
              type="date"
              value={selectedFormDate}
              onChange={(e) => setSelectedFormDate(e.target.value)}
            />
            {/* <DatePicker
              selected={selectedFormDate}
              onChange={(date) => setSelectedFormDate(date)}
              dateFormat="MM/dd/yyyy"
            /> */}
          </label>
        )}
        <label>
          Event Type:
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="WEDDING">Wedding</option>
            <option value="GRADUATION_CEREMONY">Graduation Ceremony</option>
            <option value="COCKTAIL_EVENT">Cocktail Event</option>
            <option value="OTHER">Other</option>
          </select>
        </label>
        <br />
        <label>
          Start Time:
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
        </label>
        <br />
        <label>
          End Time:
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
        </label>
      </div>
    </CustomModal>
  );
};

export default ReservationDetailsForm;