import { UserData } from '../../common/types/types';
import { StartPage } from '../../pages/StartPage';

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

export function loginAndStart(event: SubmitEvent) {
  saveDataToLocalStorage(event);
  StartPage.draw();
}
