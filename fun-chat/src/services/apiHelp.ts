import { BreakLine } from '../components/BreakLine/BreakLine';
import {
  clearTimeOutNInterval,
  scheduleLetFly1,
  scheduleLetFly2,
  scheduleLetFly3,
  scheduleLetFly5,
  scheduleLetFly6,
  scheduleLetFly7,
  scheduleLetFly8,
} from '../components/content/Content';
import { Popup } from '../components/popup/Popup';
import { clearMainButterfly, clearStorage } from '../pages/Main';
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
  MSGDeliver,
  MSGReadResponse,
  MSGDeleteResponse,
  MSGEditResponse,
} from '../types/apiTypes';
import { User } from '../types/types';
import { connectionData, getMSGSHistory, startSocket, updateAllUsers } from './api';
import { navigateTo, wait } from './router';

const RECEIVED = 'received';
const SENT = 'sent';
const READED = 'marker-status hidden';
const NOT_READED = 'marker-status';
const OUTGOING = 'outgoing-message';
const INCOMING = 'incoming-message';
export const ONLINE = 'online';
export const OFFLINE = '';

export function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function handleConnectionError(): void {
  wait();
  startSocket();
}

export function breakLineScroll() {
  const chat = document.querySelector('.main__chat-main');
  const breakLine = document.querySelector('.break-line-container');

  if (breakLine instanceof HTMLElement && chat) {
    const position = breakLine.offsetTop - 180;

    chat.scrollTop = position;
  } else if (chat instanceof HTMLElement) {
    chat.scrollTop = chat.scrollHeight + 20;
  }
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

function drawMSGIcon(from: string, isToDraw: boolean) {
  const sessionUser = getUserFromSessionStorage();
  if (sessionUser && !(from === sessionUser.login)) {
    const allUsers = document.querySelectorAll('.main__people-one');
    allUsers.forEach((user) => {
      if (user instanceof HTMLElement && user.textContent === from) {
        if (isToDraw) {
          user.classList.add('sender');
          const messageCounter = user.getAttribute('data-counter');
          if (messageCounter) {
            const messages = parseInt(messageCounter, 10) + 1;
            user.setAttribute('data-counter', `${messages}`);
          }
        } else {
          user.classList.remove('sender');

          user.setAttribute('data-counter', '0');
        }
      }
    });
  }
}

function handleMSGEditResponse(response: MSGEditResponse) {
  const messageId = response.payload.message.id;
  const { isEdited } = response.payload.message.status;

  if (isEdited) {
    const editMarker = document.querySelector(`#edited${messageId}`);
    if (editMarker instanceof HTMLElement) {
      editMarker.classList.remove('hidden');
    }

    const { text } = response.payload.message;
    if (text) {
      const message = document.querySelector(`#text${messageId}`);
      if (message instanceof HTMLElement) {
        message.textContent = text;
      }
    }
  }
}

function handleMSGDeleteResponse(response: MSGDeleteResponse) {
  const messageId = response.payload.message.id;
  const { isDeleted } = response.payload.message.status;
  if (isDeleted) {
    const message = document.querySelector(`#container${messageId}`);
    if (message instanceof HTMLElement) {
      message.remove();
    }

    updateAllUsers();
  }
}

function handleMSGReadResponse(response: MSGReadResponse) {
  const messageId = response.payload.message.id;
  const status = response.payload.message.status.isReaded;
  if (status) {
    const messageStatus = document.querySelector(`#isreaded${messageId}`);
    if (messageStatus instanceof HTMLElement) {
      messageStatus.classList.add('hidden');
      drawMSGIcon(connectionData.selectedUser, false);
      BreakLine.remove();
      connectionData.isBreakLine = false;
      const MSGElement = document.getElementById(`container${messageId}`);
      if (MSGElement instanceof HTMLElement) {
        MSGElement.classList.remove('unread-incoming');
      }
    }
  }
}

function handleMSGDeliverResponse(response: MSGDeliver) {
  const messageId = response.payload.message.id;
  const status = response.payload.message.status.isDelivered;

  if (status) {
    const messageStatus = document.querySelector(`#status${messageId}`);
    if (messageStatus instanceof HTMLElement) {
      messageStatus.textContent = RECEIVED;
    }
  }
}

function handleMSGSendResponse(response: MSGSend) {
  let messageClass = OUTGOING;
  let sender = 'You';
  let forIncomingMSG = '';
  let forIncomingUnread = '';
  let forEdited = 'hidden';

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
  const { isEdited } = message.status;
  const statusText = isDelivered ? RECEIVED : SENT;
  const markerStatus = isReaded ? READED : NOT_READED;

  if (isEdited) {
    forEdited = '';
  }

  if (!isReaded && !(to === connectionData.selectedUser)) {
    drawMSGIcon(from, true);
  }

  if (from === connectionData.selectedUser) {
    messageClass = INCOMING;
    sender = from;
    forIncomingMSG = 'hidden-for-incoming';
    forIncomingUnread = 'unread-incoming';

    if (!isReaded) {
      if (!connectionData.isBreakLine) {
        BreakLine.draw();
        connectionData.isBreakLine = true;
      }
    }
  }

  const template = `<div id="container${messageId}" class="message-container ${messageClass} ${forIncomingUnread}">
<div class="message-info">
  <div class="message-sender">${sender}</div>
  <div class="message-date">
    <div class="message-day">${date}</div>

  </div>
</div>
<div id="text${messageId}" class="message-text">${text}</div>

<div class="message-footer">
  <div class="message-tools">
    <div id="delete${messageId}" class="tool delete-message ${forIncomingMSG}">X</div>
    <div id="edit${messageId}" class="tool edit-message edit ${forIncomingMSG}">Edit</div>
    <div id="edited${messageId}" class="tool edit-message edited ${forEdited}">Edited</div>

  </div>

  <div id="isreaded${messageId}" class="${markerStatus} ${forIncomingMSG}"></div>
  <div id="status${messageId}" class="message-status ${forIncomingMSG}">${statusText}</div>
</div></div>`;

  if (to === connectionData.selectedUser || from === connectionData.selectedUser) {
    const chat = document.querySelector('.main__chat-main');
    if (!chat) {
      return;
    }

    const firstMessage = document.querySelector('.main__please-select');
    if (firstMessage) {
      firstMessage.remove();
    }

    chat.insertAdjacentHTML('beforeend', template);
    breakLineScroll();
  }
}

function handleMSGHistoryResponse(response: MSGSHistoryResponse) {
  if (response) {
    const { id } = response;

    if (id === connectionData.selectedUser) {
      const chat = document.querySelector('.main__chat-main');
      if (!chat) {
        return;
      }
      const firstMessageTemplate = '<div class="main__please-select">Please send your first message!</div>';
      chat.innerHTML = firstMessageTemplate;
    }
    const { messages } = response.payload;
    let messageCounter = 0;
    let sender = '';

    messages.forEach((message: MSGSend) => {
      const sessionUser = getUserFromSessionStorage();
      if (sessionUser) {
        const sessionUserName = sessionUser.login;
        const messageItem = message?.payload?.message || message;

        if (sessionUserName === messageItem.to && !messageItem.status.isReaded) {
          messageCounter += 1;
          sender = messageItem.from;
        }
      }
      handleMSGSendResponse(message);
    });

    if (messageCounter !== 0) {
      const people = document.querySelectorAll('.main__people-one');
      if (people) {
        people.forEach((person) => {
          if (person instanceof HTMLElement && sender && person.textContent === sender) {
            person.setAttribute('data-counter', `${messageCounter}`);
          }
        });
      }
    }
  }
}

function checkMSGS(user: string) {
  getMSGSHistory(user);
}

function handleLoginResponse(response: UserLoginResponse) {
  const { isLogined } = response.payload.user;
  if (isLogined) {
    loginTrueSessionStorageUser();
    navigateTo('main');
    scheduleLetFly1();
    scheduleLetFly2();
    scheduleLetFly5();
    scheduleLetFly6();
    scheduleLetFly7();
    scheduleLetFly3();
    scheduleLetFly8();
  } else {
    clearStorage();
    navigateTo('login');
    clearTimeOutNInterval();
  }
}

export function handleLogoutResponse(response: UserLogoutResponse) {
  const { login, isLogined } = response.payload.user;
  const sessionUser = getUserFromSessionStorage();
  if (sessionUser && sessionUser.login === login && !isLogined) {
    connectionData.selectedUser = '';
    clearStorage();
    clearTimeOutNInterval();
    clearMainButterfly();
    navigateTo('login');
  }
}

function renderActiveUserList(users: User[]) {
  const userList = document.querySelector('.main__people-list');

  const renderedUsers = document.querySelectorAll('.main__people-one sender');
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
      const sessionUser = getUserFromSessionStorage();
      if (sessionUser && !(user.login === sessionUser.login)) {
        listItem.setAttribute('data-counter', '0');
        checkMSGS(user.login);
        listItem.textContent = user.login;
        userList.insertBefore(listItem, userList.firstChild || null);
      }
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
      const sessionUser = getUserFromSessionStorage();
      if (sessionUser && !(user.login === sessionUser.login)) {
        listItem.setAttribute('data-counter', '0');
        checkMSGS(user.login);

        listItem.classList.add('offline');
        listItem.textContent = user.login;
        userList.appendChild(listItem);
      }
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
  let messages = '0';
  let sender = 'not';

  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (user.textContent === userName) {
        if (user.classList.contains('sender')) {
          sender = 'sender';
        }
        const dataCounter = user.getAttribute('data-counter');
        if (dataCounter) {
          messages = dataCounter;
        }
        user.remove();
      }
    });
  }
  const listItem = document.createElement('li');
  listItem.classList.add('main__people-one');
  listItem.classList.add(sender);

  listItem.textContent = userName;
  listItem.setAttribute('data-counter', messages);
  userList.insertBefore(listItem, userList.firstChild || null);

  if (userName === connectionData.selectedUser) {
    const userStatus = document.querySelector('.main__chat-status');
    if (userStatus) {
      userStatus.textContent = ONLINE;
    }
  }
}

function handleUserExternalLogoutResponse(response: UserExternalLogoutResponse) {
  const userName = response.payload.user.login;
  const userList = document.querySelector('.main__people-list');
  if (!userList) {
    return;
  }

  let messages = '0';
  let sender = 'not';

  const renderedUsers = document.querySelectorAll('.main__people-one');
  if (renderedUsers) {
    renderedUsers.forEach((user) => {
      if (user.textContent === userName) {
        if (user.classList.contains('sender')) {
          sender = 'sender';
        }
        const dataCounter = user.getAttribute('data-counter');
        if (dataCounter) {
          messages = dataCounter;
        }
        user.remove();
      }
    });
  }

  const listItem = document.createElement('li');
  listItem.classList.add('main__people-one');
  listItem.classList.add('offline');

  listItem.textContent = userName;
  listItem.classList.add(sender);

  listItem.setAttribute('data-counter', messages);

  userList.appendChild(listItem);

  if (userName === connectionData.selectedUser) {
    const userStatus = document.querySelector('.main__chat-status');
    if (userStatus) {
      userStatus.textContent = OFFLINE;
    }
  }
}

function handleActiveResponse(response: UsersActiveResponse) {
  const { users } = response.payload;
  renderActiveUserList(users);
}

function handleInactiveResponse(response: UsersInactiveResponse) {
  const { users } = response.payload;
  renderInactiveUserList(users);
}

export function handleError(error: string): void {
  Popup.open(`Oh dear! ${error}!`);
}

export function handleUnknownResponse(response: GeneralRequest): void {
  console.error('Неизвестный тип ответа:', response.type);
}

export function listenResponse(event: MessageEvent) {
  const response = JSON.parse(event.data);

  switch (response.type) {
    case 'MSG_EDIT':
      handleMSGEditResponse(response);
      break;

    case 'MSG_DELETE':
      handleMSGDeleteResponse(response);
      break;

    case 'MSG_READ':
      handleMSGReadResponse(response);
      break;

    case 'MSG_DELIVER':
      handleMSGDeliverResponse(response);
      break;

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
