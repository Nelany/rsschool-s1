import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { loginUser } from '../services/api';
import { generateRequestId } from '../services/apiHelp';
import { navigateTo } from '../services/router';
import './Login.scss';

function saveUserToSessionStorage() {
  const loginInput = document.querySelector('.login');
  const passwordInput = document.querySelector('.password');

  if (loginInput instanceof HTMLInputElement && passwordInput instanceof HTMLInputElement) {
    const login = loginInput.value;
    const password = passwordInput.value;
    const id = `${login}${generateRequestId()}`;

    const credentials = { id, login, password, isLogined: false };

    const credentialsJSON = JSON.stringify(credentials);

    sessionStorage.setItem('currentUser', credentialsJSON);
  }
}

function loginButtonHandler() {
  const loginButton = document.querySelector('.login-button');
  if (loginButton && !loginButton.classList.contains('disabled')) {
    saveUserToSessionStorage();
    loginUser();
    navigateTo('main');
  }
}

export function aboutButtonHandler() {
  navigateTo('about');
}

function validateForm() {
  const loginInput = document.querySelector('.login');
  const passwordInput = document.querySelector('.password');
  const loginButton = document.querySelector('.login-button');

  if (
    loginInput instanceof HTMLInputElement &&
    passwordInput instanceof HTMLInputElement &&
    loginButton instanceof HTMLElement
  ) {
    const login = loginInput.value;
    const password = passwordInput.value;
    const isFirstNameValid = login.length >= 4;
    const isPasswordValid = password.length >= 4 && /[A-Z]/.test(password);

    if (isFirstNameValid && isPasswordValid) {
      loginButton.classList.remove('disabled');
      loginInput.classList.remove('invalid');
      passwordInput.classList.remove('invalid');
    } else {
      loginButton.classList.add('disabled');

      if (!isFirstNameValid) {
        loginInput.classList.add('invalid');
      }
      if (!isPasswordValid) {
        passwordInput.classList.add('invalid');
      }
      if (isFirstNameValid) {
        loginInput.classList.remove('invalid');
      }
      if (isPasswordValid) {
        passwordInput.classList.remove('invalid');
      }
    }
  }
}

export const Login = {
  formTemplate: `<form class="login-form">
  <label for="login">Name:</label>
  <input type="text" class="input login" id="login" name="login" minlength="4" title="Please enter at least 4 characters" required>
  <div class="invalid-message name-message">Please enter at least 4 characters.</div>

  <label for="password">Password:</label>
  <input type="password" class="input password" id="password" name="password" minlength="4" pattern=".*[A-Z].*" title="Please enter at least 4 characters and one capital letter" required>
  <div class="invalid-message password-message">Please enter at least 4 characters  and one capital English letter.</div>
</form>`,

  draw() {
    ContentTemplate.draw();
    const content = document.querySelector('.content');
    if (!content) {
      return;
    }
    content.insertAdjacentHTML('beforeend', Login.formTemplate);

    Button.draw(
      '.login-form',
      {
        text: 'Login',
        classes: 'login-button disabled',
      },
      {
        type: 'click',
        selector: '.login-button',
        handler: loginButtonHandler,
      }
    );

    Button.draw(
      '.login-form',
      {
        text: 'About us',
        classes: 'about-button',
      },
      {
        type: 'click',
        selector: '.about-button',
        handler: aboutButtonHandler,
      }
    );

    const loginInput = document.querySelector('.login');
    const passwordInput = document.querySelector('.password');
    const loginButton = document.querySelector('.login-button');

    if (
      loginButton instanceof HTMLElement &&
      loginInput instanceof HTMLInputElement &&
      passwordInput instanceof HTMLInputElement
    ) {
      loginInput.addEventListener('input', validateForm);
      passwordInput.addEventListener('input', validateForm);
    }
  },
};
