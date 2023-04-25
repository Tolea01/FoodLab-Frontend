import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../assets/styles/shopping-cart-modal.css';

export default function (props) {
  const [nameInputField, setNameInputField] = useState('');
  const [emailInputField, setEmailInputField] = useState('');
  const [addressInputField, setAddressInputField] = useState('');
  const [phoneInputField, setPhoneInputField] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const states = [nameInputField, emailInputField, addressInputField, phoneInputField];
  const regex = /^[^0-9+\-*.\/]*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  const addInput = (type, label, placeholder, state, setState) => {
    return (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={state}
          autoComplete='off'
          onInput={setState}
        />
      </Form.Group>
    )
  }

  const handleOrderButton = () => {
    if (states.some(state => state.trim() === '') || states.some(state => state.length < 4)) {
      setDisplayError(true);
    } else if (!emailRegex.test(emailInputField) || !regex.test(nameInputField)) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }

  };


  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Ordering</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {
            addInput(
              'text',
              'Name and Surname',
              'Enter name and surname',
              nameInputField,
              (event) => setNameInputField(event.target.value))
          }

          {
            addInput(
              'text',
              'Email Address',
              'Enter your email address',
              emailInputField,
              (event) => setEmailInputField(event.target.value))
          }

          {
            addInput(
              'text',
              'Adress',
              'Enter your address',
              addressInputField,
              (event) => setAddressInputField(event.target.value))
          }

          {
            addInput(
              'number',
              'Phone number',
              'Enter your phone number',
              phoneInputField,
              (event) => setPhoneInputField(event.target.value))
          }
        </Form>
        <div className='text-danger'
          style={{ display: displayError ? 'block' : 'none' }}
        >Please ensure that all input fields are filled out correctly.</div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='inputs-button px-3 py-2 border-0' onClick={props.close}>
          Close
        </Button>
        <Button variant="warning text-white" onClick={handleOrderButton}>
          Order now
        </Button>
      </Modal.Footer>
    </Modal>
  )
}