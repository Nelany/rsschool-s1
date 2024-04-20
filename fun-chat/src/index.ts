import './global.scss';
import { returnChat } from './pages/Main';
import { startSocket } from './services/api';
import { locationHandler } from './services/router';

function loadApp() {
  startSocket();
  window.addEventListener('hashchange', locationHandler);
  locationHandler();
  document.body.addEventListener('click', returnChat);
}

loadApp();
