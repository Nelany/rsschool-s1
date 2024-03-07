interface UserData {
  firstName: string;
  lastName: string;
}

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

export function createLoginPage() {
  const loginPageHTML = `
      <div class="content">
          <h2 class="main-title">ENGLISH PUZZLE</h2>
          <h4 class="first-description">
              Click on words, collect phrases. <br />
              Words can be drag and drop. Select tooltips in the menu.
          </h4>
          <form class="login-form" id="loginForm">
              <div class="error-message-container">
                  <!-- Please enter the data in the specified format: minimum
                  <span class="letters-number">3</span> characters, letters and hyphen only. -->
              </div>
              <label class="first-name-label" for="firstName">First Name:</label>
              <input
                  class="name-input first-name-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  pattern="[A-Z][a-z\\-]{3,}"
                  title="Minimum 3 characters, letters and hyphen only"
                  required
              />
              <label class="last-name-label" for="lastName">Last Name:</label>
              <input
                  class="name-input last-name-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  pattern="[A-Z][a-z\\-]{4,}"
                  title="Minimum 4 characters, letters and hyphen only"
                  required
              />
              <button class="button button-login" id="loginForm" type="submit">Login</button>
          </form>
      </div>
  `;
  document.body.innerHTML = loginPageHTML;

  const form = document.getElementById('loginForm') as HTMLFormElement;
  form.addEventListener('submit', saveDataToLocalStorage);
}
