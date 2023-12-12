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
          <a href="/#/login"><button class="popup">Login</button></a>
          <a href="/#/register"><button class="popup">Register</button></a>
        </div>
        <div class="logout">
          <button class="popup">Log Out</button>
        </div>
      </nav>
      <button id="menu">☰</button>
    </header>
`;
  }
}

customElements.define('navbar-custom', Navbar);
