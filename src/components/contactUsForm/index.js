import React, { useState } from "react";

import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledTextArea,
  FormButton
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
      .then(response =>
        window.alert(
          "Thank you, your message has been successfully sent. We will contact you as soon as we review your message. "
        )
      )
      .catch(error => {
        window.alert("Oops something went wrong. Please try again later.");
        console.error("Error:", error);
      });
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
        <FormButton type="submit">Send</FormButton>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactUsForm;
