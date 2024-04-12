import { GeneralRequest, SessionData, UserLoginResponse, UserLogoutResponse } from '../types/apiTypes';
import { loginUser } from './api';
import { navigateTo, wait } from './router';

export function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function handleConnectionError(event: Event): void {
  wait();
  console.error('Ошибка соединения WebSocket:', event);
  loginUser();
}

export function loginTrueSessionStorageUser() {
  const userDataJSON = sessionStorage.getItem('currentUser');

  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);
    userData.isLogined = true;
    const credentialsJSON = JSON.stringify(userData);
    console.warn(userData, 'loginTrue');
    sessionStorage.setItem('currentUser', credentialsJSON);
  }
}

export function handleLoginResponse(response: UserLoginResponse) {
  const { login, isLogined } = response.payload.user;
  loginTrueSessionStorageUser();
  navigateTo('main');

  console.log(`Пользователь '${login}' вошел в систему: ${isLogined}`);
}

export function handleLogoutResponse(response: UserLogoutResponse) {
  const { login, isLogined } = response.payload.user;

  console.log(`Пользователь '${login}' вошел в систему: ${isLogined}`);
}

export function handleError(error: string): void {
  navigateTo('login');

  console.error('Ошибка:', error);
}

export function handleUnknownResponse(response: GeneralRequest): void {
  navigateTo('login');

  console.error('Неизвестный тип ответа:', response.type);
}

export function listenResponse(event: MessageEvent) {
  const response = JSON.parse(event.data);

  switch (response.type) {
    case 'USER_LOGOUT':
      handleLogoutResponse(response);
      break;

    case 'USER_LOGIN':
      handleLoginResponse(response);
      break;

    case 'ERROR':
      handleError(response.payload.error);
      break;

    default:
      handleUnknownResponse(response);
      break;
  }
}

export function getUserFromSessionStorage(): SessionData | null {
  const userDataJSON = sessionStorage.getItem('currentUser');

  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);

    return userData;
  }
  return null;
}

export function checkLogin() {
  const currentUser = getUserFromSessionStorage();
  if (currentUser && currentUser.isLogined) {
    return true;
  }
  return false;
}
