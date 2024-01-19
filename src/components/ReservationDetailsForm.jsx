import React, { useState, useEffect } from 'react';
// import { Button } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-datepicker';
import CustomModal from './CustomModal';
import TokenManager from '../api/TokenManager';
import UserAPI from '../api/UserApi';
import ReservationAPI from '../api/ReservationAPI';
import {toast} from 'react-hot-toast';
import "../styling/addreservationmodal-style.css"

const ReservationDetailsForm = ({ selectedDate, onClose, onSave, isAddEventButtonClicked, userItems}) => {
  const [eventType, setEventType] = useState('WEDDING');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFormDate, setSelectedFormDate] = useState(
    isAddEventButtonClicked ? new Date() : selectedDate || new Date());
  const [user, setUser] = useState({});
  const [claims, setClaims] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userFilter, setUserFilter] = useState('');

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

const filteredUsers = userItems.filter(
  (user) =>
    user.firstName.toLowerCase().includes(userFilter.toLowerCase()) ||
    user.lastName.toLowerCase().includes(userFilter.toLowerCase()) ||
    user.email.toLowerCase().includes(userFilter.toLowerCase()) ||
    user.phoneNumber.toLowerCase().includes(userFilter.toLowerCase())
);

const handleEndTimeChange = (newEndTime) => {
    if (newEndTime < startTime) {
      // Show a toast notification for the validation error
      toast.error('End time cannot be earlier than start time');
      return;
    }
    setEndTime(newEndTime);
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
    <div className="reservation-details-form-container">
      {isAddEventButtonClicked ? (
        <div className="row mb-3">
          <div className="col-12">
            <label>
              Select Date:
              <input
                type="date"
                value={selectedFormDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedFormDate(new Date(e.target.value))}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="row mb-3">
          <div className="col-12">
            <p>Date: {selectedFormDate && selectedFormDate.toLocaleDateString()}</p>
          </div>
        </div>
      )}

      {claims && claims.roles && claims.roles.includes('ADMIN') && (
        <>
          <div className="row mb-3">
            <div className="col-12">
              <label>
                Filter Users:
                <input
                  type="text"
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                  placeholder="Enter user's info"
                  className='inputfield'
                />
              </label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <label>
                Select User:
                <select className='inputfield'
                  value={selectedUserId || ''}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                >
                  <option value="">Select User</option>
                  {filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {`${user.firstName} ${user.lastName}`}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </>
      )}

      <div className="row mb-3">
        <div className="col-12">
          <label>
            Event Type:
            <select className='inputfield' value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <option value="WEDDING">Wedding</option>
              <option value="GRADUATION_CEREMONY">Graduation Ceremony</option>
              <option value="COCKTAIL_EVENT">Cocktail Event</option>
              <option value="OTHER">Other</option>
            </select>
          </label>
        </div>
      </div>

      <div className="row mb-3">
  <div className="col-6">
    <label>
      Start Time:
      <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
    </label>
  </div>
  <div className="col-6">
    <label>
      End Time:
      <input type="time" value={endTime} onChange={(e) => handleEndTimeChange(e.target.value)} />
    </label>
  </div>
</div>
    </div>
  </CustomModal>
);
};

export default ReservationDetailsForm;