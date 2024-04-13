import { clearStorage } from '../pages/Main';
import {
  GeneralRequest,
  SessionData,
  UsersActiveResponse,
  UserLoginResponse,
  UserLogoutResponse,
  UsersInactiveResponse,
  UserExternalLoginResponse,
  UserExternalLogoutResponse,
  MSGSend,
  MSGSHistoryResponse,
} from '../types/apiTypes';
import { User } from '../types/types';
import { connectionData, startSocket } from './api';
import { navigateTo, wait } from './router';

export function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function handleConnectionError(event: Event): void {
  wait();
  console.error('Ошибка соединения WebSocket:', event);
  startSocket();
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

const RECEIVED = 'received';
const SENT = 'sent';
const READED = 'marker-status hidden';
const NOT_READED = 'marker-status';
const OUTGOING = 'outgoing-message';
const INCOMING = 'incoming-message';

function formateDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

export function handleMSGSendResponse(response: MSGSend) {
  let messageClass = OUTGOING;
  let sender = 'You';
  // const { id } = response;
  const message = response?.payload?.message || response;
  const messageId = message.id;
  const { from } = message;
  const { to } = message;
  const { text } = message;
  const { datetime } = message;
  const newDate = new Date(datetime);
  const date = formateDate(newDate);
  const { isDelivered } = message.status;
  const { isReaded } = message.status;
  // const {isEdited} = response.payload.message.status;
  const statusText = isDelivered ? RECEIVED : SENT;
  const markerStatus = isReaded ? READED : NOT_READED;

  if (from === connectionData.selectedUser) {
    const chat = document.querySelector('.main__chat-main');
    if (!chat) {
      return;
    }
    messageClass = INCOMING;
    sender = from;
  }

  const template = `<div id="${messageId}" class="message-container ${messageClass}">
<div class="message-info">
  <div class="message-sender">${sender}</div>
  <div class="message-date">
    <div class="message-day">${date}</div>

  </div>
</div>
<div class="message-text">${text}</div>
<div class="message-status"><div class="${markerStatus}"></div>${statusText}</div>
</div>`;

  if (to === connectionData.selectedUser || from === connectionData.selectedUser) {
    const chat = document.querySelector('.main__chat-main');
    if (!chat) {
      return;
    }

    chat.insertAdjacentHTML('beforeend', template);
    const messageContainer = document.querySelector('.main__chat-main');
    if (messageContainer instanceof HTMLElement) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }
}

export function handleMSGHistoryResponse(response: MSGSHistoryResponse) {
  if (response) {
    const { id } = response;

    if (id === connectionData.selectedUser) {
      const chat = document.querySelector('.main__chat-main');
      if (!chat) {
        return;
      }
      chat.innerHTML = '';
      const { messages } = response.payload;

      messages.forEach((message) => {
        handleMSGSendResponse(message);
      });
    }
  }
}

export function handleLoginResponse(response: UserLoginResponse) {
  const { login, isLogined } = response.payload.user;
  if (isLogined) {
    loginTrueSessionStorageUser();
    navigateTo('main');
    console.log(`Пользователь '${login}' вошел в систему: ${isLogined}`);
  } else {
    clearStorage();
    navigateTo('login');
    console.log(`Пользователь '${login}' НЕ в системе, isLogined: ${isLogined}`);
  }
}

export function handleLogoutResponse(response: UserLogoutResponse) {
  const { login, isLogined } = response.payload.user;

  console.log(`Пользователь '${login}' вышел из системы, isLogined: ${isLogined}`);
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
    case 'MSG_FROM_USER':
      handleMSGHistoryResponse(response);
      break;

    case 'MSG_SEND':
      handleMSGSendResponse(response);
      break;

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
