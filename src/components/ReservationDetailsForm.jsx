import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import CustomModal from './CustomModal';
import TokenManager from '../api/TokenManager';
import UserAPI from '../api/UserApi';
import ReservationAPI from '../api/ReservationAPI';

const ReservationDetailsForm = ({ selectedDate, onClose, onSave, isAddEventButtonClicked}) => {
  const [eventType, setEventType] = useState('WEDDING');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFormDate, setSelectedFormDate] = useState(
    isAddEventButtonClicked ? new Date() : selectedDate || new Date()
  );
  const [user, setUser] = useState({});
  const [claims, setClaims] = useState({});

  useEffect(() => {
    getInfo()
},[])

const getInfo = () => {
  const tokenClaims = TokenManager.getClaims();
  if (tokenClaims) {
    setClaims(tokenClaims);
    const { userId } = tokenClaims;
    UserAPI.getUserById(userId)
      .then((data) => {
        setUser({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: data.password,
          role: data.role,
          active: data.active,
        });
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }
};

const handleSave = async () => {
  try {
    console.log('selectedFormDate before conversion:', selectedFormDate);

    // Convert the selectedFormDate string to a Date object
    const formattedDate = !isAddEventButtonClicked
      ? selectedFormDate
      : new Date(selectedFormDate);

    // Adjust the date for the timezone offset
    const adjustedDate = new Date(
      formattedDate.getTime() - formattedDate.getTimezoneOffset() * 60000
    );

    const response = await ReservationAPI.addReservation({
      userId: user.id,
      eventType,
      reservationCreatedDate: new Date(),
      reservationDate: isoFormattedDate,
      startTime,
      endTime,
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
  }

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