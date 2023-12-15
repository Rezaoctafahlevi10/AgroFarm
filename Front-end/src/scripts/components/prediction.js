class Prediction extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="prediksi">
    <div class="content">
        <h1>AgroFarm</h1>
        <p>
           Kamu ingin melihat prediksi cuaca untuk beberapa hari kedepannya?
        </p>
        <img src="../img/cuaca.jpg" alt="AgroFarm Image" class="image">
        <br>
        <a href="#/prediction"><button class="btn">Lihat Disini!</button></a>
    </div>
</div>
    `;
  }
}

customElements.define('weather-prediction', Prediction);
