class Register extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" class="form-control" placeholder="Masukkan usernamemu disini" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" class="form-control" placeholder="Masukkan emailmu disini" />
      </div>
      <div class="form-group">
        <label for="provinsi">Provinsi:</label>
        <input type="text" id="provinsi" class="form-control" placeholder="Masukkan provinsimu disini" />
      </div>
      <div class="form-group">
        <label for="kota">Kota:</label>
        <input type="text" id="kota" class="form-control" placeholder="Masukkan kotamu disini" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" class="form-control" placeholder="Masukkan passwordmu disini" />
      </div>
      <div class="form-group">
        <label for="confPassword">Confirm Password:</label>
        <input type="password" id="confPassword" class="form-control" placeholder="Masukkan passwordmu disini" />
      </div>
      <div class="form-group">
        <button id="buttonSave" type="button">Kirim</button>
      </div>
    </div>`;
  }
}

customElements.define('register-form', Register);
