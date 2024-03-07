import { createLoginPage } from './loginPage';

function checkLocalStorageForUserData(): void {
  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    createLoginPage();
  }
}

checkLocalStorageForUserData();

function removeUserDataAndCreateLoginPage(): void {
  localStorage.removeItem('userData');
  createLoginPage();
}

removeUserDataAndCreateLoginPage();
