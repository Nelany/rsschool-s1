import { LoginPage } from '../../pages/LoginPage';

export function removeUserDataAndOpenLoginPage(): void {
  localStorage.removeItem('userData');
  localStorage.removeItem('lustCompletedRoundIndex');
  localStorage.removeItem('lustCompletedLevelIndex');
  localStorage.removeItem('isOffTranslate');
  localStorage.removeItem('isOffSpeaker');
  localStorage.removeItem('isOffSpeak');
  localStorage.removeItem('levelArray');
  localStorage.removeItem('roundArray0');
  localStorage.removeItem('roundArray1');
  localStorage.removeItem('roundArray2');
  localStorage.removeItem('roundArray3');
  localStorage.removeItem('roundArray4');
  localStorage.removeItem('roundArray5');

  LoginPage.draw();
}
