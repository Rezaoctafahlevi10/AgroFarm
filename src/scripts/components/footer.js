class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
