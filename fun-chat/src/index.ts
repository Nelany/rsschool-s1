import './global.scss';
// import { Login } from './pages/Login';
import { locationHandler } from './services/route';

function loadApp() {
  // Login.draw();
  window.addEventListener('hashchange', locationHandler);
  locationHandler();
}

loadApp();
