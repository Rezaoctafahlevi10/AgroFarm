class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <div class="contact">
      <p>Contact US</p>
    </div>
    <div class="socials">
      <a href="https://www.instagram.com/agrofarm_idn/" target="_blank"><img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram"></a>
      <a href="https://github.com/Rezaoctafahlevi10/AgroFarm" target="_blank"><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub"></a>
    </div>
    <div class="credit">
      <p>Created by <a href="#">AgroFarm</a> | &copy; 2023.</p>
    </div>
  </footer>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
