class Prediction extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="prediksi">
      <div class="prediksi-img">
        <img src="../img/cuaca.jpg" alt="AgroFarm Image" class="image">
      </div>
      <div class="prediksi-content">
        <h1>Prediksi Cuaca</h1>
          <p>
             Kamu ingin melihat prediksi cuaca untuk beberapa hari kedepannya?
          </p>
          <br>
          <a href="#/prediction"><button class="btn">Lihat Disini!</button></a>
      </div>
    </div>
    `;
  }
}

customElements.define('weather-prediction', Prediction);
