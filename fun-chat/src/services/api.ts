import { BreakLine } from '../components/BreakLine/BreakLine';
import {
  breakLineScroll,
  generateRequestId,
  getUserFromSessionStorage,
  handleConnectionError,
  listenResponse,
} from './apiHelp';
import { navigateTo } from './router';

const SERVER_URL = 'localhost:4000';

export const connectionData = {
  socket: null as WebSocket | null,
  selectedUser: '',
  editedMessageId: '',
  isBreakLine: false,
};

export function MSGEdit(messageId: string, messageNewText: string) {
  const request = {
    id: `${messageId}${connectionData.selectedUser}MSGEDIT`,
    type: 'MSG_EDIT',
    payload: {
      message: {
        id: messageId,
        text: messageNewText,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function MSGDelete(messageId: string) {
  const sessionUser = getUserFromSessionStorage();
  if (!sessionUser) {
    return;
  }

  const request = {
    id: `MSGDELETE${sessionUser.login}`,
    type: 'MSG_DELETE',
    payload: {
      message: {
        id: messageId,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function MSGReadRequest(messageId: string) {
  const request = {
    id: `${connectionData.selectedUser}MSGREAD`,
    type: 'MSG_READ',
    payload: {
      message: {
        id: messageId,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function getMSGSHistory(login = connectionData.selectedUser) {
  const request = {
    id: `${login}`,
    type: 'MSG_FROM_USER',
    payload: {
      user: {
        login,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

function addSpaceAfterTenChars(inputString: string): string {
  const regex: RegExp = /(?:[^a-zA-Zа-яА-Я0-9\n ]){10}/g;

  return inputString.replace(regex, (match) => `${match} `);
}

export function sendMSG() {
  const currentUser = getUserFromSessionStorage();
  if (!currentUser) {
    navigateTo('login');
    return;
  }
  if (!connectionData.selectedUser) {
    return;
  }

  const messageArea = document.querySelector('.message-input');

  if (!(messageArea instanceof HTMLTextAreaElement) || !messageArea.value.trim()) {
    return;
  }

  let message = messageArea.value.trim();
  if (!message) {
    return;
  }
  message = addSpaceAfterTenChars(message);

  messageArea.value = '';
  BreakLine.remove();
  breakLineScroll();

  const request = {
    id: currentUser.id,
    type: 'MSG_SEND',
    payload: {
      message: {
        to: connectionData.selectedUser,
        text: message,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function getActiveUsers() {
  const request = {
    id: `${generateRequestId()}USER-ACTIVE`,
    type: 'USER_ACTIVE',
    payload: null,
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function getInactiveUsers() {
  const request = {
    id: `${generateRequestId()}USER-INACTIVE`,
    type: 'USER_INACTIVE',
    payload: null,
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function updateAllUsers() {
  const peopleList = document.querySelector('.main__people-list');
  if (peopleList instanceof HTMLElement) {
    peopleList.innerHTML = '';
  }
  getActiveUsers();
  getInactiveUsers();
}

export function logoutUser() {
  const currentUser = getUserFromSessionStorage();
  if (!currentUser) {
    navigateTo('login');
    return;
  }

  const request = {
    id: currentUser.id,
    type: 'USER_LOGOUT',
    payload: {
      user: {
        login: currentUser.login,
        password: currentUser.password,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function loginUser() {
  const currentUser = getUserFromSessionStorage();
  if (!currentUser) {
    navigateTo('login');
    return;
  }

  const request = {
    id: currentUser.id,
    type: 'USER_LOGIN',
    payload: {
      user: {
        login: currentUser.login,
        password: currentUser.password,
      },
    },
  };

  const { socket } = connectionData;
  if (socket && socket.readyState === socket.OPEN) {
    socket.send(JSON.stringify(request));
  }
}

export function startSocket() {
  connectionData.socket = new WebSocket(`ws://${SERVER_URL}`);

  connectionData.socket.addEventListener('open', () => {
    loginUser();
  });

  connectionData.socket.addEventListener('message', listenResponse);

  connectionData.socket.addEventListener('error', () => {
    handleConnectionError();
  });
}
