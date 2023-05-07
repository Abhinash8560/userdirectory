import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserModal from "./UserModal";
import Loader from "./Loader";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    const fieldA = a[sortField].toLowerCase();
    const fieldB = b[sortField].toLowerCase();
    if (fieldA < fieldB) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="App" style={{backgroundColor:'#35BDD0'}}>
      <header className="App-header">
        <h1 className="d-flex justify-content-center">User Directory</h1>
        <div className="search-container d-flex justify-content-center">
          <input
            type="text"
            placeholder="Search by name, username, email, phone or website"
            value={searchTerm}
            style={{width:"60%", padding:"10px 12px", margin:"10px 0"}}
            onChange={handleSearchChange}
          />
        </div>
      </header>
      {loading ? (
        <Loader />
      ) : (
        <UserList
          users={sortedUsers}
          setUsers={setUsers}
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
          onUserClick={handleUserClick}
        />
      )}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleModalClose} />
      )}
      {sortedUsers.length === 0 && (
        <div className="no-results">No results found.</div>
      )}
    </div>
  );
}

export default Users;
