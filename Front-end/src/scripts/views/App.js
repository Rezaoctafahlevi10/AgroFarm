import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, main, logout,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._main = main;
    this._logout = logout;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      main: this._main,
      logout: this._logout,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      this._main.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._main.innerHTML = '404 Not Found';
    }
  }
}

export default App;
