class Pencatatan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="pencatat">
      <div class="pencatat-img">
        <img src="../img/catat.jpg" alt="AgroFarm Image" class="image">
      </div>
      <div class="pencatat-content">
        <h1>Pencatatan Hasil Panen</h1>
        <p>
          Masih bingung untuk mencatat hasil panen yang kamu dapatkan? Tenang, AgroFarm memiliki fitur Pencatatan kamu bisa coba disini.
        </p>
        <button class="btn-1"><a href="#/pencatatan">Yuk Coba!</a></button>
      </div>
    </div>
  `;
  }
}

customElements.define('pencatatan-element', Pencatatan);
