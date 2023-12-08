import Dashboard from '../views/pages/dashboard';
import Pencatatan from '../views/pages/pencatatan';
import Weather from '../views/pages/weather';
import Artikel from '../views/pages/artikel';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Dashboard,
  '/prediction': Weather,
  '/pencatatan': Pencatatan,
  '/artikel': Artikel,
  '/login': Login,
  '/register': Register,
};

export default routes;
