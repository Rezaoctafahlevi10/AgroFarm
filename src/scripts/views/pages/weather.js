const Favorite = {
  async render() {
    return `
        <h2>Cuaca Hari Ini</h2>
        <div class="card" id="cuaca"></div>
    `;
  },

  async afterRender() {
    console.log('hallo');
  },
};

export default Favorite;
