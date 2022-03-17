import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [contact, setContact] = useState({
    names: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <label htmlFor="names">
        Full Names: <br />
        <input
          type="text"
          name="names"
          id="names"
          placeholder="Enter your names"
          required
          value={contact.names}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email Address: <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          value={contact.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="message">
        Message: <br />
        <textarea
          value={contact.message}
          onChange={handleChange}
          name="Enter your message..."
          rows={15}
          placeholder="Message"
        />
      </label>
      <button className="form__btn cursor">Submit</button>
    </form>
  );
};

export default Form;
