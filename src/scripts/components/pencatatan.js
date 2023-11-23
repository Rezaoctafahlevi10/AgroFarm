class Pencatatan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hasil-panen" class="hasil-panen">
    <h2>Pencatatan Hasil Panen</h2>
    <p>Isi formulir di bawah ini untuk mencatat hasil panen Anda.</p>
  
    <div class="row">
      <form action="#" method="post" class="hasil-panen-form">
        <div class="input-group">
          <label for="tanggal-panen"><i data-feather="calendar"></i>Tanggal Panen</label>
          <input type="date" id="tanggal-panen" name="tanggal-panen" required />
        </div>
        <div class="input-group">
          <label for="jenis-tanaman"><i data-feather="list"></i>Jenis Tanaman</label>
          <input type="text" id="jenis-tanaman" name="jenis-tanaman" required />
        </div>
        <div class="input-group">
          <label for="jumlah-panen"><i data-feather="box"></i>Jumlah Panen (kg)</label>
          <input type="number" id="jumlah-panen" name="jumlah-panen" required />
        </div>
        <button type="submit" class="btn">Catat Hasil Panen</button>
      </form>
    </div>
  </section>
            `;
  }
}

customElements.define('pencatatan-element', Pencatatan);
