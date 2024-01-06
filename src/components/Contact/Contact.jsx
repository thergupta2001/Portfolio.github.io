import React from "react";
import email from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";
import styles from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ecn26ck",
        "template_atl5yei",
        form.current,
        "SNCFtYgiWOMu4_ySz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="email" />
          <a href="mailto:2001.rohangupta@gmail.com">
            2001.rohangupta@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/rohan-gupta-88319422a/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github" />
          <a href="https://github.com/thergupta2001">Github</a>
        </li>
        <li className={styles.contactdetails}>
          <form action="" ref={form} onSubmit={sendEmail} className={styles.mailForm}>
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              className={styles.mailName}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
