import './global.css';
import { createLoginPage } from './loginPage';
import { createStartPage } from './startPage';

function checkLocalStorageForUserData(): void {
  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    createLoginPage();
  } else {
    createStartPage();
  }
}

checkLocalStorageForUserData();
