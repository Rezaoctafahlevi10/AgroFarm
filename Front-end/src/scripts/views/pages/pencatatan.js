import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import API_ENDPOINT from '../../global/api-endpoint';
import Weather from '../../data/data-source';
import { createNote } from '../templates/template-creator';

const Pencatatan = {
  async render() {
    return `
    <div id="loading-screen">
      <h1>sedang memuat data</h1>
      <div class="loader"></div>
    </div>
    <div class="" id="main"></div>
    `;
  },

  async afterRender() {
    await Weather.checkAuth();
    try {
      const note = await Weather.listNote();
      const pencatatanContainer = document.querySelector('#main');
      pencatatanContainer.innerHTML = createNote(note);

      const tanaman = document.getElementById('jenis-tanaman');
      const jumlah = document.getElementById('jumlah-panen');
      const tanggal = document.getElementById('tanggal-panen');
      const submitForm = document.querySelector('#saveNote');

      const responseToken = await axios.get(API_ENDPOINT.TOKEN, { withCredentials: true });
      const decoded = jwtDecode(responseToken.data.accessToken);
      const getUserId = decoded.userId;

      submitForm.addEventListener('click', async (e) => {
        e.stopPropagation();

        const noteData = {
          userId: getUserId,
          tanaman: tanaman.value,
          jumlah: jumlah.value,
          tanggal: tanggal.value,
        };
        Weather.makeNote(noteData);
      });
    } catch (error) {
      /* empty */
    }
  },
};

export default Pencatatan;
