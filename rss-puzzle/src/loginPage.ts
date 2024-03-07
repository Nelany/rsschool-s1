import { loginAndStartTemplate, UserData } from './loginAndStartTemplate';
import { createStartPage } from './startPage';

function saveDataToLocalStorage(event: SubmitEvent): void {
  const form = document.getElementById('loginForm');
  event.preventDefault();

  if (form instanceof HTMLFormElement) {
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');

    if (typeof firstName === 'string' && typeof lastName === 'string') {
      if (firstName.trim() !== '' && lastName.trim() !== '') {
        const userData: UserData = {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        };

        localStorage.setItem('userData', JSON.stringify(userData));
      }
    }
  }
}

function loginAndStart(event: SubmitEvent) {
  saveDataToLocalStorage(event);
  createStartPage();
}

export function createLoginPage() {
  loginAndStartTemplate();

  const contentElement = document.querySelector('.content');

  if (contentElement) {
    const formHTML = `
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
        `;

    contentElement.innerHTML += formHTML;

    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', loginAndStart);
    }
  }
}
