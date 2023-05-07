import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './person.css';

const PersonModal = ({ person }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{person.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <h5>Company Details</h5>
              <p><strong>Name:</strong> {person.company.name}</p>
              <p><strong>Catch Phrase:</strong> {person.company.catchPhrase}</p>
              <p><strong>BS:</strong> {person.company.bs}</p>
            </div>
            <div className="col-md-6">
              <h5>Address Details</h5>
              <p><strong>Street:</strong> {person.address.street}</p>
              <p><strong>Suite:</strong> {person.address.suite}</p>
              <p><strong>City:</strong> {person.address.city}</p>
              <p><strong>Zipcode:</strong> {person.address.zipcode}</p>
              <p><strong>Latitude:</strong> {person.address.geo.lat}</p>
              <p><strong>Longitude:</strong> {person.address.geo.lng}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PersonModal;
