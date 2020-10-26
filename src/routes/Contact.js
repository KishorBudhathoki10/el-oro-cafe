import React from "react";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.Contact} id="Contact">
      <div className={classes.container}>
        <h2>Contact</h2>

        <div className={classes.Contact_Container}>
          <div className={classes.Contact_Map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.340321128283!2d2.1757146154258433!3d41.38841507926406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fb0be6e20b%3A0x1c22ef762dd33051!2sLa%20Masala%20Caf%C3%A8!5e0!3m2!1ses!2ses!4v1603539872237!5m2!1ses!2ses"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="La Masala Cafe"
            ></iframe>
          </div>

          <div className={classes.Contact_Info}>
            <div className={classes.Contact_Info_Container}>
              <h3>Email</h3>
              <p>budhathokikishor10@gmail.com</p>
            </div>

            <div className={classes.Contact_Info_Container}>
              <h3>Phone No</h3>
              <p>+34 664586315</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
