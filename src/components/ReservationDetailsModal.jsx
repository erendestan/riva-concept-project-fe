// ReservationDetailsModal.jsx
import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import ReservationAPI from '../api/ReservationAPI';
import TokenManager from '../api/TokenManager';
import UserAPI from '../api/UserApi';
import { toast } from 'react-hot-toast';

const ReservationDetailsModal = ({ reservationId, onClose }) => {
  const [reservationDetails, setReservationDetails] = useState(null);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userIsReservationOwner, setUserIsReservationOwner] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [eventType, setEventType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userFilter, setUserFilter] = useState('');
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        const details = await ReservationAPI.getReservationById(reservationId);
        setReservationDetails(details);

        // Check if the logged-in user is an ADMIN
        const claims = TokenManager.getClaims();
        setUserIsAdmin(claims && claims.roles && claims.roles.includes('ADMIN'));
        setUserIsReservationOwner(
          claims?.userId !== undefined &&
          claims?.userId !== null &&
          details.user &&
          details.user.id !== undefined &&
          details.user.id !== null &&
          String(claims.userId) === String(details.user.id)
        );
        // Set initial values for editing
        setEventType(details.eventType);
        setStartTime(details.startTime);
        setEndTime(details.endTime);  

        if (userIsAdmin) {
          const users = await UserAPI.getAllUsers();
          setUserItems(users);
        }

        // If user is an admin and in editing mode, set the selected user to the reservation owner
        if (userIsAdmin && isEditing) {
          setSelectedUserId(details.user.id);
        }

      } catch (error) {
        console.error('Error fetching reservation details:', error);
        // Handle error, show a message, etc.
      }
    };

    fetchReservationDetails();
  }, [reservationId, userIsAdmin, isEditing]);

  const formatEventType = (eventType) => {
    return eventType
      .toLowerCase()
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Assuming selectedUserId is required for updating reservation
      let userIdToUpdate = selectedUserId;
      // If the user is not an admin, use the user ID from claims
      if (!userIsAdmin) {
        const claims = TokenManager.getClaims();
        userIdToUpdate = claims.userId;
      }
  
      const updatedReservation = {
        id: reservationId,
        userId: selectedUserId !== null ? selectedUserId : reservationDetails.user.id,
        reservationCreatedDate: reservationDetails.reservationCreatedDate,
        reservationDate: reservationDetails.reservationDate,
        eventType,
        startTime,
        endTime,
      };
  
      // Call the update API function
      await ReservationAPI.updateReservation(updatedReservation);
  
      // Handle success (e.g., show a success message, close the modal)
      window.location.reload();
      toast.success('Reservation updated successfully');
      
      // Perform any additional actions, e.g., closing the modal
      setIsEditing(false);
      onClose();
    } catch (error) {
      console.error('Error updating reservation:', error);
      // Handle error (e.g., show an error message)
      toast.error('Error updating reservation');
    }
  };

  const handleDeleteClick = async () => {
    try {
      // Check if the user is an admin or the reservation owner
      const canDelete =
        userIsAdmin || (userIsReservationOwner && !isEditing);

      if (canDelete) {
        // Call the delete API function
        await ReservationAPI.deleteReservation(reservationId);

        // Handle success (e.g., show a success message, close the modal)
        window.location.reload();
        toast.success('Reservation deleted successfully');

        // Perform any additional actions, e.g., closing the modal
        onClose();
      } else {
        toast.error('You do not have permission to delete this reservation');
      }
    } catch (error) {
      console.error('Error deleting reservation:', error);
      // Handle error (e.g., show an error message)
      toast.error('Error deleting reservation');
    }
  };

  
const filteredUsers = userIsAdmin
? userItems.filter(
    (user) =>
      user.firstName.toLowerCase().includes(userFilter.toLowerCase()) ||
      user.lastName.toLowerCase().includes(userFilter.toLowerCase()) ||
      user.email.toLowerCase().includes(userFilter.toLowerCase()) ||
      user.phoneNumber.toLowerCase().includes(userFilter.toLowerCase())
  )
: userItems;

return (
  <CustomModal
    isOpen={!!reservationDetails}
    toggle={onClose}
    title="Reservation Details"
    onCancel={onClose}
  >
    {reservationDetails && (
      <div>
        {!userIsAdmin && (
          <p>User: {reservationDetails.user.firstName} {reservationDetails.user.lastName}</p>
        )}

        {userIsAdmin && !isEditing && (
          <p>User: {reservationDetails.user.firstName} {reservationDetails.user.lastName}</p>
        )}

        {userIsAdmin && isEditing && (
          <>
            <label>
              Filter Users:
              <input
                type="text"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
                placeholder="Enter user's info"
              />
            </label>
            <label>
              Select User:
              <select
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
          </>
        )}

        {isEditing ? (
          <>
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
          </>
        ) : (
          <>
            <p>Event Type: {formatEventType(reservationDetails.eventType)}</p>
            <p>Start Time: {reservationDetails.startTime}</p>
            <p>End Time: {reservationDetails.endTime}</p>
          </>
        )}

        {!isEditing && (userIsAdmin || userIsReservationOwner) && (
          <>
            <button className="btn btn-success" onClick={handleEditClick}>Edit</button>
            <button className="btn btn-danger ml-2" onClick={handleDeleteClick}>Delete</button>
          </>
        )}

        {isEditing && (
          <button className="btn btn-success" onClick={handleSaveClick}>Save</button>
        )}
      </div>
    )}
  </CustomModal>
);

};

export default ReservationDetailsModal;
