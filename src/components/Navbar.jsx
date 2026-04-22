function Navbar() {
  return (
    <nav className="navbar">
<a href="#" className="logo-link"><h1 className="logo">TEDxETU</h1></a>

      <ul className="nav-links">
        <li><a href="#home">Ana Sayfa</a></li>
        <li><a href="#about">Hakkında</a></li>
        <li><a href="#theme">Tema</a></li>
        <li><a href="#speakers">Konuşmacılar</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#faq">SSS</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>

      <a href="#registration" className="nav-button">
        Başvur
      </a>
    </nav>
  );
}

export default Navbar;