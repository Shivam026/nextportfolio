
import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div
      className="contact"
      id="contact"
    >
      
      <h2 className="contact-sub-title">Contact me</h2>
      <p className="contact-text">
        I am looking for new opportunity as web developer/Software engineer/Programmer and in the futurelearning about cloud technologies.
        If you have any opportunity for me or any new job openings then please send me email.
      </p>
      <div className="contact-cta">
        <Button link="mailto:ishivams2@gmail.com" text="Email" />
      </div>
    </div>
  );
}

export default Contact;
