class CustomProduct extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
          `;
  }
}

customElements.define('custom-product', CustomProduct);
