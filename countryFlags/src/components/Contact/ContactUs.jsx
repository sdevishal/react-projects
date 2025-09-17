import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been submitted.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <style>
                {`
          .contact-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #f5f5f5;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
          }

          .contact-container h1 {
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 2rem;
          }

          .contact-container form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-container input,
          .contact-container textarea {
            padding: 0.75rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }

          .contact-container button {
            padding: 0.75rem;
            background-color: #222;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
          }

          .contact-container button:hover {
            background-color: #555;
          }
        `}
            </style>

            <div className="contact-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;
