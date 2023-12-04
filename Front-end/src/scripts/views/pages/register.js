import Weather from "../../data/data-source";
import { createFormRegister } from "../templates/template-creator";
import "../../../styles/style.scss";

const Register = {
  async render() {
    return `
    <div class="regis" id="main"></div>
    `;
  },

  async afterRender() {
    const weather = await Weather.listWeather();
    const weatherContainer = document.querySelector("#main");
    weatherContainer.innerHTML = createFormRegister(weather);

    const submitForm = document.querySelector("#buttonSave");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const provinsi = document.getElementById("provinsi");
    const kota = document.getElementById("kota");

    submitForm.addEventListener("click", async (e) => {
      e.stopPropagation();
      const registerData = {
        username: username.value,
        email: email.value,
        password: password.value,
        provinsi: provinsi.value,
        kota: kota.value,
      };
      Weather.registerUser(registerData);
    });
  },
};

export default Register;
