class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav id="drawer" class="navbar">
      <a href="#" class="navbar-logo">AGROFARM</a>
      <div class="navbar-nav">
        <a href="/#">Home</a>
        <a href="/#/prediction">Prediksi Cuaca</a>
        <a href="/#/product">Produk</a>
        <a href="/#/contact">Kontak</a>
        <a href="/#/login"><button class="popup-login">Login</button></a>
        <a href="/#/register"><button class="popup-register">Register</button></a> 
      </div>
      <div class="navbar-extra">
      <button id="menu">☰</button>
      </div>
    </nav>
    </header>
`;
  }
}

customElements.define('navbar-custom', Navbar);
