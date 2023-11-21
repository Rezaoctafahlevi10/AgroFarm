class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar">
      <a href="#" class="navbar-logo">AGROFARM</a>
      <div class="navbar-nav">
        <a href="#home">Home</a>
        <a href="#prediksi">Prediksi Cuaca</a>
        <a href="#products">Produk</a>
        <a href="#contact">Kontak</a>
        <button class="popup-login">Login</button>
      </div>

      <div class="navbar-extra">
        <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
      </div>
    </nav>
`;
  }
}

customElements.define('navbar-custom', Navbar);
