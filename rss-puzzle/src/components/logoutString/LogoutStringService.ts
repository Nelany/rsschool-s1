import { LoginPage } from '../../pages/LoginPage';

export function removeUserDataAndOpenLoginPage(): void {
  localStorage.removeItem('userData');
  LoginPage.draw();
}
