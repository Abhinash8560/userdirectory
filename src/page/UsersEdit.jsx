import React, { useState } from 'react';

const UsersEdit = ({ tag, onSave, onClose }) => {
  const [name, setName] = useState(tag.name);
  const [username, setUsername] = useState(tag.username);
  const [email, setEmail] = useState(tag.email);
  const [phone, setPhone] = useState(tag.phone);
  const [website, setWebsite] = useState(tag.website);
  const handleSave = () => {
    const updatedUser = { ...tag, name, username, email, phone, website };
    onSave(updatedUser);
    onClose();
  };

  return (
    <div className="modal" style={{ display: "block", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", overflow: "auto", backgroundColor: "rgba(0,0,0,0.4)", zIndex: "1" }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "600px", margin: "auto" }}>
        <div className="modal-content" style={{ padding: "20px" }}>
          <h2>Edit User</h2>
          <div className="form-group">
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="username-input">Username:</label>
            <input id="username-input" className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Email:</label>
            <input id="email-input" className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone-input">Phone:</label>
            <input id="phone-input" className="form-control" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="website-input">Website:</label>
            <input id="website-input" className="form-control" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <div className="modal-buttons" style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersEdit;
