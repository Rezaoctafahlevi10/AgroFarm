class Artikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="artikel-container">
      <div class="artikel-img">
        <img src="../img/artikel.jpg" alt="AgroFarm Image" class="artimg">
      </div>
      <div class="artikel-desc">
        <h1>Artikel</h1>
        <p>
          Kunci pertanian yang subur adalah dengan ilmu pengetahuan, dengan itu hasil panen dapat berpengaruh dengan cara-cara yang benar. 
          Ingin tahu bagaimana cara bertani yang benar agar menghasilkan hasil yang memuaskan?
        </p>
        <button class="btn-2"><a href="#/artikel">Yuk Lihat Disini!</a></button>
      </div>
    </div>
    `;
  }
}

customElements.define('custom-artikel', Artikel);
