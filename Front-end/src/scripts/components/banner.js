class CustomBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="../img/banner1.png" style="width:100%"; max-width: 1200px; height: auto;>
        </div>
        <div class="mySlides fade">
          <img src="../img/banner2.png" style="width:100%"; max-width: 1200px; height: auto;>
        </div> 
        <div class="mySlides fade">
          <img src="../img/banner3.png" style="width:100%"; max-width: 1200px; height: auto;>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-banner', CustomBanner);
