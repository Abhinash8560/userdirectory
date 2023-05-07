import React, { useState } from "react";
import PersonModal from "./PersonModal";
import UsersEdit from "./UsersEdit";
import { Button } from "react-bootstrap";

function UserList(props) {
  const { users, setUsers, sortField, sortOrder, onSort, onUserClick } = props;
  const [tag,setTag] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showEditModal,setShowEditModal] = useState(false);
  const handlebhai = (hs)=>{
    console.log(hs
    )
    setTag(hs);
    setShowEditModal(true);
  }
  const handleSortClick = (field) => {
    onSort(field);
  };
const handlechange = (editedUser)=>{
  const temp = users.map((user) => {
    if (user.id === editedUser.id) {
      return editedUser;
    } else {
      return user;
    }
  })
  setUsers(temp)
}
const changemodal = ()=>{
  setShowEditModal(false);
}
  return (
    <div className="table-responsive">
       {showEditModal && tag && <UsersEdit tag={tag} onSave={handlechange} onClose={changemodal}/>}
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
            <th className="p-2">Edit</th>
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
              <td className="p-2 pointer"><Button onClick={()=>handlebhai(user)}>Edit</Button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
