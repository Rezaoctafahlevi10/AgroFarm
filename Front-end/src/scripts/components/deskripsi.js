class Deskripsi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="deskripsi">
      <img src="../img/agrofarm.png" alt="AgroFarm Image" class="image">
      <div class="desk">
          <h1>AgroFarm</h1>
          <p>
              AgroFarm adalah sebuah aplikasi web yang dirancang khusus untuk memenuhi kebutuhan para petani dalam mendukung dan meningkatkan efisiensi proses pertanian.
              Aplikasi ini menyediakan berbagai fitur dan layanan yang dirancang untuk memberikan solusi informatif dan praktis kepada para petani.
          </p>
      </div>
  </div>
              `;
  }
}

customElements.define('deskripsi-web', Deskripsi);
