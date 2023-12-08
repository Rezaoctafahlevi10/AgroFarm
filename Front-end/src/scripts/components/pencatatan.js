class Pencatatan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="" class="">
    <h2>Pencatatan Hasil Panen</h2>
    </div>
  </section>
            `;
  }
}

customElements.define('pencatatan-element', Pencatatan);
