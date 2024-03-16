import { checkLocalStorageForUserData } from './common/services/localStorage';
import { selectsChangeListener } from './components/select/SelectService';
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
  const body = document.querySelector('body');
  if (!body) {
    return;
  }
  body.addEventListener('change', selectsChangeListener);
}

loadApp();
