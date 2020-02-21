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
    // sendEmail();
    alert(values);
    setValues(initialValues);
  };

  //   const sendEmail = () => {
  //     const sgMail = require("@sendgrid/mail");
  //     sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  //     const msg = {
  //       to: "em.francomartinez@gmail.com",
  //       from: "test@example.com",
  //       subject: "Sending with Twilio SendGrid is Fun",
  //       text: "and easy to do anywhere, even with Node.js",
  //       html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  //     };
  //     sgMail.send(msg).then(resp => {
  //       console.log(resp);
  //     }, console.error());
  //   };

  // const sendEmail = () => {
  //   const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  //   const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  //   const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  //   emailjs
  //     .send(serviceID, templateID, values, userID)

  //     .then(
  //       result => {
  //         console.log(result.text);
  //       },
  //       error => {
  //         console.log(error.text);
  //       }
  //     );
  // };

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
