import { MSGReadRequest } from '../../services/api';
import './BreakLine.scss';

export const BreakLine = {
  template: `<div class="break-line-container">
<div class="break-line">
<img class="butterfly" src="./butterfly4.png">
<img class="butterfly" src="./butterfly4.png">
<img class="butterfly" src="./butterfly4.png">
<img class="butterfly" src="./butterfly4.png">
<img class="butterfly" src="./butterfly4.png">
</div>
<div class="unread-messages">Dear, you have unread messages!</div>
</div>`,

  draw() {
    const chat = document.querySelector('.main__chat-main');
    if (chat) {
      chat.insertAdjacentHTML('beforeend', BreakLine.template);
    }
  },

  remove() {
    const breakLine = document.querySelector('.break-line-container');
    if (breakLine) {
      breakLine.remove();
    }
  },
};

export function sendMSGReadRequest() {
  const unreadMSGContainers = Array.from(document.querySelectorAll('.unread-incoming'));

  if (unreadMSGContainers) {
    unreadMSGContainers.forEach((MSGContainer) => {
      if (MSGContainer instanceof HTMLElement) {
        const { id } = MSGContainer;
        const prefix = 'container';
        const messageId = id.substring(prefix.length);
        console.warn(MSGContainer.classList.toString(), 'НЕПРОЧИТАНО');
        MSGReadRequest(messageId);
      }
    });
  }
}

export function listenReadMessages() {
  const chat = document.querySelector('.main__chat-main');
  if (chat) {
    const sendMessageButton = document.querySelector('.button-send');
    if (sendMessageButton) {
      sendMessageButton.addEventListener('click', sendMSGReadRequest);
    }

    chat.addEventListener('click', sendMSGReadRequest);
    chat.addEventListener('wheel', sendMSGReadRequest);
  }
}
