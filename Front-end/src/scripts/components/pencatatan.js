class Pencatatan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="pencatat">
    <img src="../img/catat.jpg" alt="AgroFarm Image" class="image">
    <div class="deskrip">
      <h1>Pencatatan Hasil Panen</h1>
      <p>
        Masih bingung untuk mencatat hasil panen yang kamu dapatkan? Tenang, AgroFarm memiliki fitur Pencatatan kamu bisa coba disini.
      </p>
      <a href="#/pencatatan"><button class="btn-1">Yuk Coba!</button></a>
    </div>
  </div>
            `;
  }
}

customElements.define('pencatatan-element', Pencatatan);
