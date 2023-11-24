class CustomBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="banner" class="banner">
      <h2>Ini Banner</h2>
    </section>
        `;
  }
}

customElements.define('custom-banner', CustomBanner);
