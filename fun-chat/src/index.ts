import './global.scss';
import { startSocket } from './services/api';
import { locationHandler } from './services/router';

function loadApp() {
  window.addEventListener('hashchange', locationHandler);
  locationHandler();
  startSocket();
}

loadApp();
