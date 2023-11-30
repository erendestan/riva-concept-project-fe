import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserItem from "./UserItem";
// import { user } from "@nextui-org/react";

export default function UserList(props) {
  const { userItems, isActive, refreshList } = props;

  //Pagination
  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = userItems.filter((user) => user.active === isActive);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = userItems.slice(indexOfFirstUser, indexOfLastUser);
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // const totalPages = Math.ceil(userItems.length / usersPerPage);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (filteredUsers.length === 0) {
    return (
      <div className="mt-3">
        <p>
          {isActive
            ? "There are no active users in the system."
            : "There are no inactive users in the system."}
        </p>
      </div>
    );
  } else {
    return (
      <div className="mt-3">
        <table className="table table-striped mt-3">
          <thead className="sticky-top">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers
              .filter((user) => user.active === isActive)
              .map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  isActive={isActive}
                  refreshList={refreshList}
                />
              ))}
            {/* {userItems
              .filter((user) => user.active === isActive)
              // .filter((user) => (user.active = user.active))
              .map((user) => (
                <UserItem
                  key={user.id}
                  user={user}
                  isActive={isActive}
                  refreshList={refreshList}
                />
              ))} */}
          </tbody>
        </table>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index + 1}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
