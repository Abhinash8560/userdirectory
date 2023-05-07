import React, { useState } from "react";
import PersonModal from "./PersonModal";

function UserList(props) {
  const { users, sortField, sortOrder, onSort, onUserClick } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSortClick = (field) => {
    onSort(field);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <th className="p-2" onClick={() => handleSortClick("name")}>
              Name{" "}
              {sortField === "name" && (
                <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
              )}
            </th>
            <th className="p-2" onClick={() => handleSortClick("username")}>
              Username{" "}
              {sortField === "username" && (
                <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
              )}
            </th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Website</th>
            <th className="p-2" style={{ width: "100px" }}>
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {(searchResults.length > 0 ? searchResults : users).map((user) => (
            <tr key={user.id} onClick={() => onUserClick(user)}>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.website}</td>
              <td className="p-2">
                <PersonModal person={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
