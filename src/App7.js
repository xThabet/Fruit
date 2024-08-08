import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 15px;
`;

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      />
    </form>
  );
}

function App() {
  return(
    <>
    <Form />
    <Container/>
    </>

  ) 
}

export default App;