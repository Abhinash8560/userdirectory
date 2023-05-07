import React from "react";

function UserModal(props) {
  const { user, onClose } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          {user.address.geo.lat}, {user.address.geo.lng}
        </p>
        <h3>Company</h3>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserModal;
