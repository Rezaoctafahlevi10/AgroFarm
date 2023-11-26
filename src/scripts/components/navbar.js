class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  
`;
  }
}

customElements.define('navbar-custom', Navbar);
