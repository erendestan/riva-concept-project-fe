// ReservationDetailsModal.jsx
import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import ReservationAPI from '../api/ReservationAPI';

const ReservationDetailsModal = ({ reservationId, onClose }) => {
  const [reservationDetails, setReservationDetails] = useState(null);

  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        const details = await ReservationAPI.getReservationById(reservationId);
        setReservationDetails(details);
      } catch (error) {
        console.error('Error fetching reservation details:', error);
        // Handle error, show a message, etc.
      }
    };

    fetchReservationDetails();
  }, [reservationId]);

  const formatEventType = (eventType) => {
    return eventType
      .toLowerCase()
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <CustomModal
      isOpen={!!reservationDetails}
      toggle={onClose}
      title="Reservation Details"
      onCancel={onClose}
    >
      {reservationDetails && (
        <div>
          <p>User: {reservationDetails.user.firstName} {reservationDetails.user.lastName}</p>
          <p>Event Type: {formatEventType(reservationDetails.eventType)}</p>
          <p>Start Time: {reservationDetails.startTime}</p>
          <p>End Time: {reservationDetails.endTime}</p>
          {/* Add other details you want to display */}
        </div>
      )}
    </CustomModal>
  );
};

export default ReservationDetailsModal;
