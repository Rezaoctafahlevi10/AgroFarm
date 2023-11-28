class Artikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Artikel Section -->
<section id="artikel" class="artikel">
  <h2>Artikel</h2>

  <div class="artikel-card">
    <div class="artikel-image">
      <img src="img/artikel1.jpg" alt="Artikel 1" />
    </div>
    <div class="artikel-content">
      <h3>Judul Artikel 1</h3>
      <p>Tanggal: 1 Januari 2023</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" class="btn">Baca Selengkapnya</a>
    </div>
  </div>

  <div class="artikel-card">
    <div class="artikel-image">
      <img src="img/artikel2.jpg" alt="Artikel 2" />
    </div>
    <div class="artikel-content">
      <h3>Judul Artikel 2</h3>
      <p>Tanggal: 5 Februari 2023</p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="#" class="btn">Baca Selengkapnya</a>
    </div>
  </div>
</section>

        `;
  }
}

customElements.define('custom-artikel', Artikel);
