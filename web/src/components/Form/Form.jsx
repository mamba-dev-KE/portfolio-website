import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ name: e.target.value });
  };

  const [isDone, setIsDone] = useState(false);
  // setup email service
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kywqap9",
        "template_ufmg2hv",
        form.current,
        "LgXanrVAxwloe1d5Y"
      )
      .then(
        result => {
          if (result) {
            setIsDone(!isDone);
          }
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="form" autoComplete="off">
        <label htmlFor="names">
          Full Names: <br />
          <input
            type="text"
            name="names"
            id="names"
            placeholder="Names"
            required
            value={FormData.names}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email Address: <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={FormData.email}
          />
        </label>

        <label htmlFor="message">
          Message: <br />
          <textarea
            name="message"
            rows={15}
            placeholder="Message"
            required
            value={FormData.message}
          />
        </label>
        <button className="form__btn cursor">Submit</button>
        <span className="form__success">
          {isDone &&
            "Email successfully sent! Sit tight, I will get back to you as soon as possible."}
        </span>

        {formData.name}
      </form>
    </>
  );
};

export default Form;
