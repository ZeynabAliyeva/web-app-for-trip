import "./style.css";

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-container">
        <h1 className="contact-title">Commercial Contacts</h1>
        <p className="contact-sub__title">To advertise on Tourista:</p>
        <p className="email-adress">advertise@tourista.com</p>
        <p className="contact-sub__title">To become an affiliate partner:</p>
        <p className="email-adress">affiliate@tourista.com</p>
        <p className="contact-sub__title">To contact the hotels team:</p>
        <p className="email-adress">hotels@tourista.com</p>
        <p className="contact-sub__title">Send your request to republish Tourista content:</p>
        <p className="email-adress">contentlicensing@tourista.com</p>
        <p className="contact-sub__title">To contact the experiences team:</p>
        <p className="email-adress">experiences@tourista.com</p>
      </div>
      <div className="contacts-container">
        <h1 className="contact-title">Content Contact</h1>
        <p className="contact-sub__title">To report an issue to our content teams please contact: </p>
        <p className="email-adress">corrections@tourista.com</p>
        <h1 className="contact-title">Press Contact</h1>
        <p className="contact-sub__title">
          If you’re a journalist / influencer with a press enquiry about
          Tourista,
          <br />
          please contact our press office:
        </p>
        <p className="email-adress">pr@tourista.com</p>
        <h1 className="contact-title">Partnership Contact</h1>
        <p className="contact-sub__title">For partnership opportunities:</p>
        <p className="email-adress">partnerships@tourista.com</p>
      </div>
    </div>
  );
}

export default Contacts;
