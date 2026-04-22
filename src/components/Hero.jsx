function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-background-shape shape-1"></div>
      <div className="hero-background-shape shape-2"></div>
      <div className="hero-background-shape shape-3"></div>

      <div className="hero-content">
        <p className="event-label">TEDxETU 2026</p>

        <h2>BAŞLANGIÇ</h2>

        <p className="hero-description">
          Her büyük dönüşümün arkasında sıradan bir an vardır. 
          O anı fark eden, cesaretle adım atan insanların hikayelerini bir araya getiriyoruz. 
          TEDxETU 2026'ya hoş geldin.

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