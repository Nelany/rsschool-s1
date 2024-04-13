import {
  GeneralRequest,
  SessionData,
  UsersActiveResponse,
  UserLoginResponse,
  UserLogoutResponse,
  UsersInactiveResponse,
  UserExternalLoginResponse,
  UserExternalLogoutResponse,
} from '../types/apiTypes';
import { User } from '../types/types';
import { loginUser, updateAllUsers } from './api';
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
    sessionStorage.setItem('currentUser', credentialsJSON);
  }
}

export function handleLoginResponse(response: UserLoginResponse) {
  const { login, isLogined } = response.payload.user;
  loginTrueSessionStorageUser();
  updateAllUsers();
  navigateTo('main');

  console.log(`Пользователь '${login}' вошел в систему: ${isLogined}`);
}

export function handleLogoutResponse(response: UserLogoutResponse) {
  const { login, isLogined } = response.payload.user;

  console.log(`Пользователь '${login}' вошел в систему: ${isLogined}`);
}

function renderActiveUserList(users: User[]) {
  const userList = document.querySelector('.main__people-list');

  const renderedUsers = document.querySelectorAll('.main__people-one');
  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (!user.classList.contains('offline')) {
        user.remove();
      }
    });
  }

  if (userList instanceof HTMLElement) {
    users.reverse().forEach((user) => {
      const listItem = document.createElement('li');
      listItem.classList.add('main__people-one');
      listItem.textContent = user.login;
      userList.insertBefore(listItem, userList.firstChild || null);
    });
  }
}
function renderInactiveUserList(users: User[]) {
  const userList = document.querySelector('.main__people-list');

  const renderedUsers = document.querySelectorAll('.main__people-one');
  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (user.classList.contains('offline')) {
        user.remove();
      }
    });
  }

  if (userList instanceof HTMLElement) {
    users.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.classList.add('main__people-one');
      listItem.classList.add('offline');
      listItem.textContent = user.login;
      userList.appendChild(listItem);
    });
  }
}

function handleUserExternalLoginResponse(response: UserExternalLoginResponse) {
  const userName = response.payload.user.login;
  const userList = document.querySelector('.main__people-list');
  if (!userList) {
    return;
  }

  const renderedUsers = document.querySelectorAll('.main__people-one');
  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (user.textContent === userName) {
        user.remove();
      }
    });
  }
  const listItem = document.createElement('li');
  listItem.classList.add('main__people-one');
  listItem.textContent = userName;
  userList.insertBefore(listItem, userList.firstChild || null);
}

function handleUserExternalLogoutResponse(response: UserExternalLogoutResponse) {
  const userName = response.payload.user.login;
  const userList = document.querySelector('.main__people-list');
  if (!userList) {
    return;
  }

  const renderedUsers = document.querySelectorAll('.main__people-one');
  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (user.textContent === userName) {
        user.remove();
      }
    });
  }

  const listItem = document.createElement('li');
  listItem.classList.add('main__people-one');
  listItem.classList.add('offline');

  listItem.textContent = userName;
  userList.appendChild(listItem);
}

export function handleActiveResponse(response: UsersActiveResponse) {
  const { users } = response.payload;
  renderActiveUserList(users);
}

export function handleInactiveResponse(response: UsersInactiveResponse) {
  const { users } = response.payload;
  renderInactiveUserList(users);
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
    case 'USER_EXTERNAL_LOGOUT':
      handleUserExternalLogoutResponse(response);
      break;

    case 'USER_EXTERNAL_LOGIN':
      handleUserExternalLoginResponse(response);
      break;

    case 'USER_ACTIVE':
      handleActiveResponse(response);
      break;

    case 'USER_INACTIVE':
      handleInactiveResponse(response);
      break;

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
