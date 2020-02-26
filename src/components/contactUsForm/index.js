import React, { useState } from "react";
// import emailjs from "emailjs-com";

import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledTextArea,
  Button
} from "./Styles";

const ContactUsForm = () => {
  const initialValues = { name: "", phone: "", email: "", message: "" };

  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail();
    setValues(initialValues);
  };

  const sendEmail = () => {
    const url =
      "https://pe6m7vr3qk.execute-api.us-west-2.amazonaws.com/default/emilio-sendgrid-lamda";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(response => console.log("Email was sent."))
      .catch(error => console.error("Error:", error));
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledInput
            name="name"
            value={values.name}
            type="text"
            onChange={handleChange}
            required
            placeholder="Name"
          />
          <StyledInput
            name="phone"
            value={values.phone}
            type="tel"
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
          <StyledInput
            name="email"
            value={values.email}
            type="email"
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <StyledTextArea
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          placeholder="Tell us a little about your project..."
        />
        <Button type="submit">Send</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactUsForm;
