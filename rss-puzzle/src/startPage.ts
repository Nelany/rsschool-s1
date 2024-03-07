import { createLoginPage } from './loginPage';
import { loginAndStartTemplate } from './loginAndStartTemplate';

loginAndStartTemplate();

function removeUserDataAndOpenLoginPage(): void {
  localStorage.removeItem('userData');
  createLoginPage();
}

export function createStartPage() {
  loginAndStartTemplate();

  const contentElement = document.querySelector('.content');

  if (contentElement) {
    const greetingHTML = `
          <h3 class="greeting">Welcome, Vasya Pupkin!</h3>
          <button class="button button-start" id="startButton" type="submit">Start</button>
          <h5 class="log-out-string" id="logOut" type="submit">Do you want to log out?</h5>
        `;

    contentElement.innerHTML += greetingHTML;

    const startButton = document.getElementById('startButton');
    if (startButton) {
      startButton.addEventListener('click', removeUserDataAndOpenLoginPage);
    }

    const logOutString = document.getElementById('logOut');
    if (logOutString) {
      logOutString.addEventListener('click', removeUserDataAndOpenLoginPage);
    }
  }
}
