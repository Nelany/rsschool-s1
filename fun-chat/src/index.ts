import './global.scss';
import { startSocket } from './services/api';
import { locationHandler } from './services/router';

function loadApp() {
  startSocket();
  window.addEventListener('hashchange', locationHandler);
  locationHandler();
}

loadApp();
