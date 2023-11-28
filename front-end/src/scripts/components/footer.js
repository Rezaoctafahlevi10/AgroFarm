class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="socials">
        <a href="#"><i data-feather="instagram"></i></a>
        <a href="#"><i data-feather="twitter"></i></a>
        <a href="#"><i data-feather="facebook"></i></a>
      </div>
      <div class="credit">
        <p>Created by <a href="">AgroFarm</a> | &copy; 2023.</p>
      </div>
    </footer>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
