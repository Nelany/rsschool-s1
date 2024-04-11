import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { navigateTo } from '../services/router';
import './Login.scss';

function loginButtonHandler() {
  navigateTo('main');
}

export function aboutButtonHandler() {
  navigateTo('about');
}

function validateForm() {
  const firstNameInput = document.querySelector('.first-name');
  const passwordInput = document.querySelector('.password');
  const loginButton = document.querySelector('.login-button');

  if (
    firstNameInput instanceof HTMLInputElement &&
    passwordInput instanceof HTMLInputElement &&
    loginButton instanceof HTMLElement
  ) {
    const firstName = firstNameInput.value;
    const password = passwordInput.value;

    const isFirstNameValid = firstName.length >= 4;
    const isPasswordValid = password.length >= 4 && /[A-Z]/.test(password);

    if (isFirstNameValid && isPasswordValid) {
      loginButton.classList.remove('disabled');
      firstNameInput.classList.remove('invalid');
      passwordInput.classList.remove('invalid');
    } else {
      loginButton.classList.add('disabled');

      if (!isFirstNameValid) {
        firstNameInput.classList.add('invalid');
      }
      if (!isPasswordValid) {
        passwordInput.classList.add('invalid');
      }
      if (isFirstNameValid) {
        firstNameInput.classList.remove('invalid');
      }
      if (isPasswordValid) {
        passwordInput.classList.remove('invalid');
      }
    }
  }
}

export const Login = {
  formTemplate: `<form class="login-form">
  <label for="firstName">Name:</label>
  <input type="text" class="input first-name" id="firstName" name="firstName" minlength="4" title="Please enter at least 4 characters" required>
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

    const firstNameInput = document.querySelector('.first-name');
    const passwordInput = document.querySelector('.password');

    if (firstNameInput instanceof HTMLInputElement && passwordInput instanceof HTMLInputElement) {
      firstNameInput.addEventListener('input', validateForm);
      passwordInput.addEventListener('input', validateForm);
    }
  },
};
