function Contact() {
  return (
    <section className="section fade-section" id="contact">
      <h3>İletişim</h3>

      <div className="contact-grid">
        <a href="mailto:info@tedxetu.com" className="contact-card-link">
          <div className="contact-card">
            <h4>E-posta</h4>
            <p>info@tedxetu.com</p>
          </div>
        </a>

        <a href="https://www.instagram.com/tedxetu/" className="contact-card-link" target="_blank" rel="noopener noreferrer">
          <div className="contact-card">
            <h4>Instagram</h4>
            <p>@tedxetu</p>
          </div>
        </a>

        <div className="contact-card">
          <h4>Konum</h4>
          <p>Erzurum Teknik Üniversitesi</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;