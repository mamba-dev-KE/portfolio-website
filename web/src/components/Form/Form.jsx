import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

const Form = () => {
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
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form" autoComplete="off">
      <label htmlFor="names">
        Full Names: <br />
        <input
          type="text"
          name="names"
          id="names"
          placeholder="Names"
          required
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
        />
      </label>

      <label htmlFor="message">
        Message: <br />
        <textarea name="message" rows={15} placeholder="Message" required />
      </label>
      <button className="form__btn cursor">Submit</button>
    </form>
  );
};

export default Form;
