import React, { useState } from "react";
import styled from "styled-components/macro";

const FormContainer = styled.div`
  max-width: 750px;
  max-height: 350px;
  border: 1px solid white;
  padding: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px 5px;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  margin: 10px 2px;
`;

const StyledTextArea = styled.textarea`
  height: 100px;
  padding: 20px;
  border-radius: 4px;
`;

const red = "#A5000C";

const Button = styled.button`
  background-color: ${red};
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px 50px;
  max-width: 200px;
  font-weight: 600;
  color: white;
  align-self: center;

  :hover {
    cursor: pointer;
  }
`;

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `{name: ${name}, phone: ${phone}, email: ${phone}, message: ${message}}`
    );
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={e => handleSubmit(e)}>
        <div>
          <StyledInput
            value={name}
            type="text"
            onChange={e => setName(e.target.value)}
            required
            placeholder="Name"
          />
          <StyledInput
            value={phone}
            type="tel"
            onChange={e => setPhone(e.target.value)}
            required
            placeholder="Phone Number"
          />
          <StyledInput
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <StyledTextArea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          placeholder="Tell us a little about your project..."
        />
        <Button type="submit">Send</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactUsForm;
