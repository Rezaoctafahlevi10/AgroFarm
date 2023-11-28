class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="form">
      <div class="form-group"> 
        <label for="username">Username: </label>
        <input type="text" id="username" class="form-control" placeholder="Masukkan username mu disini"/>
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="email" id="email" rows="6" placeholder="Masukkan email mu disini"></input>
      </div>
      <div class="form-group">
        <label for="provinsi">Provinsi: </label>
        <input type="text" id="provinsi" rows="6" placeholder="Masukkan provinsi mu disini"></input>
      </div>
      <div class="form-group">
        <label for="kota">Kota: </label>
        <input type="text" id="kota" rows="6" placeholder="Masukkan kota mu disini"></input>
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" id="password" rows="6" placeholder="Masukkan password mu disini"></input>
      </div>
      <div class="form-group">
        <button id="buttonSave">Kirim Review</button>
      </div>
    </div>`;
  }
}

customElements.define('register-form', Register);
