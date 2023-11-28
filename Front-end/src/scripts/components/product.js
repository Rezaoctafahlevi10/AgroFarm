class CustomProduct extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="products" id="products">
    <h2>Produk</h2>

    <div class="row">
      <div class="product-card">
        <div class="product-icons"></div>
        <div class="product-image">
          <img src="../img/agrofarm.png" alt="Product 1" />
        </div>
        <div class="product-content">
          <h3>Product 1</h3>
          <div class="product-price">harga</div>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image">
          <img src="../img/agrofarm.png" alt="Product 2" />
        </div>
        <div class="product-content">
          <h3>Product 2</h3>
          <div class="product-price">harga</div>
        </div>
      </div>
  </section>
          `;
  }
}

customElements.define('custom-product', CustomProduct);
