import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { motion } from "framer-motion";


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovered , setHovered] = useState(false)
   const [hovered1, setHovered1] = useState(false);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contact us & request changes</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <div
            style={{
              position: "absolute",
              backgroundColor: "lightgray",
              padding: 10,
              borderRadius: 7,
              marginBottom: 140,
              display: hovered ? "block" : "none",
            }}
          >
            <h5 style={{ fontSize: 16 }}>coppy to clipboard</h5>
          </div>
          <CopyToClipboard text="updaterxD@gmail.com">
            <button
              onMouseLeave={() => setHovered(false)}
              onMouseEnter={() => setHovered(true)}
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
              }}
            >
              <img src={images.email} alt="email" />
              <a href="updaterxD@gmail.com" className="p-text-number">
                updaterxD@gmail.com
              </a>
            </button>
          </CopyToClipboard>
        </div>
        <div className="app__footer-card">
          <div
            style={{
              position: "absolute",
              backgroundColor: "lightgray",
              padding: 10,
              borderRadius: 7,
              marginBottom: 140,
              display: hovered1 ? "block" : "none",
            }}
          >
            <h5 style={{ fontSize: 16 }}>coppy to clipboard</h5>
          </div>
          <CopyToClipboard text="+1 (123) 456-7890">
            <button
              onMouseLeave={() => setHovered1(false)}
              onMouseEnter={() => setHovered1(true)}
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
              }}
            >
              <img src={images.mobile} alt="phone" />
              <a href="tel:+1 (123) 456-7890" className="p-text-number">
                +355 (068) 2682455
              </a>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      {!isFormSubmitted ? (
        <>
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <motion.div whileTap={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="button" className="p-text1" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          </motion.div>
        </>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
