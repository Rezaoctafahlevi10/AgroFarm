
import RestaurantList from '../views/pages/dashboard';

import Dashboard from '../views/pages/dashboard';
import Product from '../views/pages/product';
import Weather from '../views/pages/weather';
import Contact from '../views/pages/contact';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Dashboard,
  '/prediction': Weather,
  '/product': Product,
  '/contact': Contact,
  '/login': Login,
  '/register': Register,
};

export default routes;
