import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import CustomModal from './CustomModal';
import TokenManager from '../api/TokenManager';
import UserAPI from '../api/UserApi';
import ReservationAPI from '../api/ReservationAPI';
import {toast} from 'react-hot-toast';

const ReservationDetailsForm = ({ selectedDate, onClose, onSave, isAddEventButtonClicked, userItems}) => {
  const [eventType, setEventType] = useState('WEDDING');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFormDate, setSelectedFormDate] = useState(
    isAddEventButtonClicked ? new Date() : selectedDate || new Date()
  );
  console.log(userItems, "test")
  const [user, setUser] = useState({});
  const [claims, setClaims] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);

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
    // Convert the selectedFormDate string to a Date object
    const formattedDate = !isAddEventButtonClicked
      ? selectedFormDate
      : new Date(selectedFormDate);

    // Adjust the date for the timezone offset
    const adjustedDate = new Date(
      formattedDate.getTime() - formattedDate.getTimezoneOffset() * 60000
    );

    // Convert adjusted date to ISO string
    const isoFormattedDate = adjustedDate.toISOString();

    const response = await ReservationAPI.addReservation({
      userId: selectedUserId || user.id,
      eventType,
      reservationCreatedDate: new Date(),
      reservationDate: isoFormattedDate,
      startTime,
      endTime,
    });

    window.location.reload();
    toast.success('Reservation created successfully');

  } catch (error) {
    console.error('Error creating reservation:', error);
    toast.error('Error creating reservation. Please try again.');
  }

  // Close the form
  onClose();
};

return (
  <CustomModal
    isOpen={true}
    toggle={onClose}
    title="Create Event"
    submitText="Save Event"
    onCancel={onClose}
    onSubmit={handleSave}
  >
    <div>
      {isAddEventButtonClicked ? (
        <label>
          Select Date:
          <input
            type="date"
            value={selectedFormDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedFormDate(new Date(e.target.value))}
          />
        </label>
      ) : (
        <p>Date: {selectedFormDate && selectedFormDate.toLocaleDateString()}</p>
      )}

      {claims && claims.roles && claims.roles.includes('ADMIN') && (
        <label>
          Select User:
          <select
            value={selectedUserId || ''}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">Select User</option>
            {userItems.map((user) => (
              <option key={user.id} value={user.id}>
                {`${user.firstName} ${user.lastName}`}
              </option>
            ))}
          </select>
        </label>
      )}

      {/* Rest of the form */}
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
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>
      <br />
      <label>
        End Time:
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>
    </div>
  </CustomModal>
);

};

export default ReservationDetailsForm;