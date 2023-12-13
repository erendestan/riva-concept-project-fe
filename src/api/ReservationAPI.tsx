import axios from "axios";
import TokenManager from "./TokenManager";

axios.defaults.baseURL = "http://localhost:8080";

const ReservationAPI = {
  addReservation: (newReservation) =>
    axios.post(`/reservations`, newReservation, {
      headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
    }),

  getReservationById: (reservationId) =>
    axios
      .get(`/reservations/${reservationId}`, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data),

  getAllReservations: () =>
    axios
      .get(`/reservations`, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data.reservations),

  updateReservation: (updateReservation) =>
    axios.put(`/reservations/${updateReservation.id}`, updateReservation, {
      headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
    }),

  deleteReservation: (reservationId) =>
    axios
      .delete(`/reservations/${reservationId}`, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data),
};

export default ReservationAPI;
