class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <div class="logo">
        <a href="#" class="navbar-logo">AGROFARM</a>
      </div>
      <nav id="drawer" class="navbar">
        <div class="navbar-nav">
          <a href="/#">Home</a>
          <a href="/#/prediction">Prediksi Cuaca</a>
          <a href="/#/pencatatan">Pencatatan</a>
          <a href="/#/artikel">Artikel</a>
        </div>
        <div class="nav-auth">
          <a href="/#/login"><button class="popup-login">Login</button></a>
          <a href="/#/register"><button class="popup-register">Register</button></a>
          <a href="/#/register"><button class="popup-register">Log Out</button></a>
        </div>
      </nav>
      <button id="menu">☰</button>
    </header>
`;
  }
}

customElements.define('navbar-custom', Navbar);
