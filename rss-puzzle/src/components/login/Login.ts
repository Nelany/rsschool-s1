import './Login.css';
import { loginAndStart } from './LoginService';

export const Login = {
  template: `
  <form class="login-form" id="loginForm">
  <div class="error-message-container">
                  <!-- Please enter the data in the specified format:first letter capitalized, minimum
                  <span class="letters-number">3</span> characters, letters and hyphen only. -->
              </div>
              <label class="first-name-label" for="firstName">First Name:</label>
              <input
                  class="name-input first-name-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  pattern="[A-Z][a-z\\-]{2,}"
                  title="First letter capitalized, minimum 3 characters, letters and hyphen only"
                  required
              />
              <label class="last-name-label" for="lastName">Last Name:</label>
              <input
                  class="name-input last-name-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  pattern="[A-Z][a-z\\-]{3,}"
                  title="First letter capitalized, minimum 4 characters, letters and hyphen only"
                  required
              />
              <button class="button button-login" id="loginFormButton" type="submit">Log In</button>
              </form>
  `,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', Login.template);
    Login.addListeners();
  },

  addListeners: () => {
    const form = document.getElementById('loginForm');

    if (form) {
      form.addEventListener('submit', loginAndStart);
    }
  },
};
