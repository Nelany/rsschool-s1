import { getUserFromSessionStorage, handleConnectionError, listenResponse } from './apiHelp';
import { navigateTo, wait } from './router';

const SERVER_URL = 'localhost:4000';

export const connectionData = {
  socket: null as WebSocket | null,
};

export function sendUser() {
  // *************************************************************
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
  if (socket) {
    socket.send(JSON.stringify(request));
  }

  wait();

  console.warn(request);
}

export function startSocket() {
  connectionData.socket = new WebSocket(`ws://${SERVER_URL}`);

  connectionData.socket.addEventListener('open', () => {
    navigateTo('main');
  });

  connectionData.socket.addEventListener('message', listenResponse);

  connectionData.socket.addEventListener('error', (event: Event) => {
    handleConnectionError(event);
  });
}
