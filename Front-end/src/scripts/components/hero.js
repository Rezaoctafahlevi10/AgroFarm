class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero" id="home">
      <div class="mask-container">
        <main class="content">
          <h1>Ayo Majukan Pertanian <span>Indonesia</span></h1>
          <h2>Bersama AGROFARM mari kita berkembang bersama!<h2>
        </main>
      </div>
    </section>`;
  }
}

customElements.define('hero-element', Hero);
