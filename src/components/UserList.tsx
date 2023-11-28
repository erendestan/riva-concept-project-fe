import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserItem from "./UserItem";

export default function UserList(props) {
  const { userItems, isActive, refreshList } = props;

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
          {userItems.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              isActive={isActive}
              refreshList={refreshList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
