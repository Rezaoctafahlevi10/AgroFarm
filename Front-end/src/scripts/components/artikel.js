class Artikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="artikel-desc">
    <img src="../img/artikel.jpg" alt="AgroFarm Image" class="artimg">
    <div class="artdesc">
      <h1>Artikel</h1>
      <p>
        Kunci pertanian yang subur adalah dengan ilmu pengetahuan, dengan itu hasil panen dapat berpengaruh dengan cara-cara yang benar. 
        Ingin tahu bagaimana cara bertani yang benar agar menghasilkan hasil yang memuaskan?
      </p>
      <a href="#/artikel"><button class="btn-2">Yuk Lihat Disini!</button></a>
    </div>
  </div>
        `;
  }
}

customElements.define('custom-artikel', Artikel);
