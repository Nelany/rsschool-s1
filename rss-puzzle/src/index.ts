import './global.css';
import { UserData } from './loginAndStartTemplate';
import { createLoginPage } from './loginPage';
import { createStartPage } from './startPage';

export function checkLocalStorageForUserData(): void | UserData {
  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    createLoginPage();
    return undefined;
  }
  const userData: UserData = JSON.parse(storedUserData);
  return userData;
}

function loadApp() {
  const restoredUserData = checkLocalStorageForUserData();
  if (restoredUserData) {
    createStartPage();
  }
}

loadApp();
