import { createLoginPage } from './loginPage';
import { loginAndStartTemplate, UserData } from './loginAndStartTemplate';
import { checkLocalStorageForUserData } from './index';
import { createMainPage } from './mainPage';

loginAndStartTemplate();

function removeUserDataAndOpenLoginPage(): void {
  localStorage.removeItem('userData');
  createLoginPage();
}

function displayGreetingName(greetingName: HTMLElement): void {
  const fullNameContainer = greetingName;
  if (fullNameContainer) {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData: UserData = JSON.parse(storedUserData);
      const fullName = `${userData.firstName} ${userData.lastName}`;

      fullNameContainer.textContent = fullName;
    }
  }
}

function openMainPage() {
  const restoredUserData = checkLocalStorageForUserData();
  if (restoredUserData) {
    createMainPage();
  }
}

export function createStartPage() {
  loginAndStartTemplate();

  const contentElement = document.querySelector('.content');

  if (contentElement) {
    const greetingHTML = `
          <h3 class="greeting">Welcome, <span class="greeting-name" id="greetingName"></span>!</h3>
          <button class="button button-start" id="startButton" type="submit">Start</button>
          <h5 class="log-out-string" id="logOut" type="submit">Do you want to log out?</h5>
        `;

    contentElement.innerHTML += greetingHTML;

    const startButton = document.getElementById('startButton');
    if (startButton) {
      startButton.addEventListener('click', openMainPage);
    }

    const logOutString = document.getElementById('logOut');
    if (logOutString) {
      logOutString.addEventListener('click', removeUserDataAndOpenLoginPage);
    }

    const greetingName = document.getElementById('greetingName');
    if (greetingName) {
      displayGreetingName(greetingName);
    }
  }
}
