const Contact = () =>  {
    return (
        <section id="contact-us">
            <div className="contact-container">
                <div className="section-title">
                <h2>CONTACT US</h2>
                <hr className="line" />
                <p>
                    Lorem ipsum is not simply random text. It has roots in a piece of
                    classical at <br />
                    Hampden-Sydney College.
                </p>
                </div>
                <div className="map-form-container">
                <div className="contact-info">
                    <div className="contact-item">
                    <h4>
                        Mobile Number
                        <br />
                        <span>+90 123 456 67 89</span>
                    </h4>
                    <h4>
                        Email Address
                        <br />
                        <span>demo@demo.com</span>
                    </h4>
                    </div>
                    <h2>Make An Appointment</h2>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea
                    name="message"
                    rows={4}
                    cols={50}
                    placeholder="Your Message"
                    style={{ resize: "none" }}
                    defaultValue={""}
                    />
                </div>
                <div className="map">
                    <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.70292354436!2d27.720987599999994!3d38.494496399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9a7743a276d91%3A0xeb7ea5ec7f4e4a30!2sCross%20Fit-Zone%20Sport%20Center!5e0!3m2!1str!2str!4v1741106947658!5m2!1str!2str"
                    width={350}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>
            </div>
            </section>

    );
};

export default Contact;