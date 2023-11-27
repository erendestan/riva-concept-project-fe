import React from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "../api/UserApi";

export default function UserItem(props) {
  const navigate = useNavigate();
  const { user, isActive, refreshList } = props;

  const handleEditNavigate = () => {
    navigate("/editUser/" + user.id);
  };

  const handleUserActiveChange = () => {
    const updatedUser = { ...user, active: !user.active };

    UserAPI.updateUser(updatedUser)
      .then((repsose) => {
        refreshList();
      })
      .catch((error) => {
        alert("Update failed");
      });
  };

  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td className="d-flex">
        <button
          className="btn btn-success mt-3"
          style={isActive === true ? { display: "none" } : { display: "block" }}
          onClick={handleUserActiveChange}
        >
          Renew User
        </button>
        <button
          className="btn btn-primary mx-2"
          style={
            isActive === false ? { display: "none" } : { display: "block" }
          }
          onClick={handleEditNavigate}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          style={
            isActive === false ? { display: "none" } : { display: "block" }
          }
          onClick={handleUserActiveChange}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
