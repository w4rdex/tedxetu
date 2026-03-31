function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-background-shape shape-1"></div>
      <div className="hero-background-shape shape-2"></div>
      <div className="hero-background-shape shape-3"></div>

      <div className="hero-content">
        <p className="event-label">TEDxETU 2026</p>

        <h2>Başlangıç</h2>

        <p className="hero-description">
          Her fikir bir başlangıçtır. Her değişim bir adımla başlar.
          TEDxETU 2026, hayatı değiştiren başlangıç hikayelerini sahneye taşıyor.
        </p>

        <div className="hero-buttons">
          <button className="hero-button primary">Başvuru / Kayıt</button>
          <button className="hero-button secondary">Etkinliği Keşfet</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;