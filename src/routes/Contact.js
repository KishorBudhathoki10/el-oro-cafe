import React from "react";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.Contact} id="Contact">
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(./images/contact.webp)` }}
      ></div>

      <div className={classes.content}>
        <div className={classes.title}>
          <h2>
            Contact <span>Us</span>
          </h2>
          <div className={classes.circle}></div>
        </div>

        <div className={classes.form}>
          <form>
            <div className={classes.formControl}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="John" />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Doe" />
            </div>

            <div className={classes.formControl}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please enter your message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit">Send</button>

            <div className={classes.googleMap}>
              <div>
                <p>Get</p>
                <p>Directions</p>
              </div>
              <img src="./images/google_map.webp" alt="google-map-icon" />
            </div>
          </form>
        </div>

        <div className={classes.contactInfo}>
          <div>
            <h6>Directions:</h6> <p>Carrer de Pujol 17, Barcelona</p>
          </div>
          <div>
            <h6>EMAIL:</h6> <p>budhathokikishor10@gmail.com</p>
          </div>
          <div>
            <h6>PH:</h6> <p>664586315</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
