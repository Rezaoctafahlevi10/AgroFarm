import Weather from '../data/data-source';

const DrawerInitiator = {
  init({
    button, drawer, main, logout,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    logout.addEventListener('click', (event) => {
      Weather.logout();
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
