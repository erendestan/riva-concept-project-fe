import React, { useState } from 'react';
import { Button } from 'reactstrap';
import CustomModal from './CustomModal';

const ReservationDetailsForm = ({ selectedDate, onClose }) => {
  const [eventType, setEventType] = useState('WEDDING');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
        <p>Date: {selectedDate && selectedDate.toLocaleDateString()}</p>
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