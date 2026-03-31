function Registration() {
  return (
    <section className="section fade-section" id="registration">
      <h3>Başvuru / Kayıt</h3>
      <p className="registration-text">
        TEDxETU etkinliğine katılmak, ekipte yer almak veya iş birliği fırsatları
        için başvuru formunu doldurabilirsiniz.
      </p>

      <div className="registration-cards">
        <div className="registration-card">
          <h4>Katılımcı Başvurusu</h4>
          <p>Etkinliğe izleyici olarak katılmak için başvuru yapın.</p>
          <a href="https://forms.gle/w4Q4RphXoysM2AR66" target="_blank">
            <button className="hero-button primary">Başvur</button>
          </a>
        </div>

        <div className="registration-card">
          <h4>Gönüllü Başvurusu</h4>
          <p>Organizasyon ekibinde yer almak için formu doldurun.</p>
          <a href="https://forms.gle/FORM_LINKI" target="_blank">
            <button className="hero-button secondary">Formu Aç</button>
          </a>
        </div>

        <div className="registration-card">
          <h4>Sponsor / İş Birliği</h4>
          <p>Markanızla TEDxETU sahnesinde yer almak için iletişime geçin.</p>
          <a href="mailto:info@tedxetu.com">
            <button className="hero-button secondary">İletişime Geç</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Registration;