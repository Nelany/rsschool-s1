import { checkLocalStorageForUserData } from './common/services/localStorage';
import './global.scss';
import { LoginPage } from './pages/LoginPage';
import { StartPage } from './pages/StartPage';

function loadApp() {
  const restoredUserData = checkLocalStorageForUserData();
  if (restoredUserData) {
    StartPage.draw();
  } else {
    LoginPage.draw();
  }
}

loadApp();
