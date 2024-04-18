import { BreakLine, listenReadMessages, sendMSGReadRequest } from '../components/BreakLine/BreakLine';
import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { Popup } from '../components/popup/Popup';
import {
  MSGDelete,
  MSGEdit,
  connectionData,
  getMSGSHistory,
  logoutUser,
  sendMSG,
  updateAllUsers,
} from '../services/api';
import { OFFLINE, ONLINE, breakLineScroll, checkLogin, getUserFromSessionStorage } from '../services/apiHelp';
import { navigateTo } from '../services/router';
import { aboutButtonHandler } from './Login';
import './Main.scss';

function listenSearch() {
  const input = document.querySelector('.people-name');

  if (input instanceof HTMLInputElement)
    input.addEventListener('input', (event) => {
      if (event.target instanceof HTMLInputElement) {
        const searchText = event.target.value.trim().toLowerCase();

        const listItems = document.querySelectorAll('.main__people-one');

        listItems.forEach((item) => {
          if (item.textContent && item instanceof HTMLElement) {
            const listItemText = item.textContent.trim().toLowerCase();

            if (listItemText.startsWith(searchText)) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          }
        });
      }
    });
}

function showEditButtons() {
  const sendButton = document.querySelector('.button-send');
  if (sendButton instanceof HTMLElement) {
    sendButton.classList.add('hidden');
  }
  const editContainer = document.querySelector('.edit-buttons-container');
  if (editContainer instanceof HTMLElement) {
    editContainer.classList.remove('hidden');
  }
  const editCancel = document.querySelector('.button-edit-cancel');
  if (editCancel instanceof HTMLElement) {
    editCancel.classList.remove('hidden');
  }
  const editOk = document.querySelector('.button-edit-ok');
  if (editOk instanceof HTMLElement) {
    editOk.classList.remove('hidden');
  }
}

function hideEditOptions() {
  const sendButton = document.querySelector('.button-send');
  if (sendButton instanceof HTMLElement) {
    sendButton.classList.remove('hidden');
  }
  const editContainer = document.querySelector('.edit-buttons-container');
  if (editContainer instanceof HTMLElement) {
    editContainer.classList.add('hidden');
  }
  const editCancel = document.querySelector('.button-edit-cancel');
  if (editCancel instanceof HTMLElement) {
    editCancel.classList.add('hidden');
  }
  const editOk = document.querySelector('.button-edit-ok');
  if (editOk instanceof HTMLElement) {
    editOk.classList.add('hidden');
  }

  const textArea = document.querySelector('.message-input');
  if (textArea instanceof HTMLTextAreaElement) {
    textArea.value = '';
  }

  connectionData.editedMessageId = '';
}

function listenEditOptions() {
  const chatFooter = document.querySelector('.main__chat-footer');
  if (chatFooter instanceof HTMLElement) {
    chatFooter.addEventListener('click', (event: Event) => {
      if (event.target instanceof HTMLElement && event.target.classList.contains('button-edit-ok')) {
        const textArea = document.querySelector('.message-input');
        if (textArea instanceof HTMLTextAreaElement) {
          const newMessageText = textArea.value.trim();
          if (newMessageText) {
            MSGEdit(connectionData.editedMessageId, newMessageText);
            hideEditOptions();
          }
        }
      }

      if (event.target instanceof HTMLElement && event.target.classList.contains('button-edit-cancel')) {
        hideEditOptions();
      }
    });
  }

  const textArea = document.querySelector('.message-input');
  if (textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('keydown', (e) => {
      if (connectionData.editedMessageId && e instanceof KeyboardEvent && e.key === 'Enter') {
        if (e.shiftKey) {
          textArea.value += '\n';
        } else {
          e.preventDefault();
          const newMessageText = textArea.value.trim();
          if (newMessageText) {
            MSGEdit(connectionData.editedMessageId, newMessageText);
            hideEditOptions();
          }
        }
      }
    });
  }
}

function listenEdit() {
  const chat = document.querySelector('.main__chat-main');
  if (chat instanceof HTMLElement) {
    chat.addEventListener('click', (event: Event) => {
      if (event.target instanceof HTMLElement && event.target.classList.contains('edit-message')) {
        const { id } = event.target;
        const prefix = 'edit';
        const messageId = id.substring(prefix.length);
        const messageElement = document.querySelector(`#text${messageId}`);
        if (messageElement instanceof HTMLElement) {
          const messageText = messageElement.textContent;
          if (messageText) {
            const textArea = document.querySelector('.message-input');
            if (textArea instanceof HTMLTextAreaElement) {
              textArea.classList.remove('disabled');
              textArea.value = messageText;
            }
            connectionData.editedMessageId = messageId;
            showEditButtons();
          }
        }
      }
    });
  }
}

function listenDelete() {
  const chat = document.querySelector('.main__chat-main');
  if (chat instanceof HTMLElement) {
    chat.addEventListener('click', (event: Event) => {
      if (event.target instanceof HTMLElement && event.target.classList.contains('delete-message')) {
        const { id } = event.target;
        const prefix = 'delete';
        const messageId = id.substring(prefix.length);
        MSGDelete(messageId);
      }
    });
  }
}

function listenSend() {
  const sendButton = document.querySelector('.button-send');
  if (sendButton instanceof HTMLElement) {
    sendButton.addEventListener('click', sendMSG);
  }

  const textArea = document.querySelector('.message-input');
  if (textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('keydown', (event) => {
      if (connectionData.editedMessageId === '' && event instanceof KeyboardEvent && event.key === 'Enter') {
        if (event.shiftKey) {
          textArea.value += '\n';
        } else {
          event.preventDefault();
          sendMSG();
          sendMSGReadRequest();
          textArea.value = '';
          BreakLine.remove();
          breakLineScroll();
        }
      }
    });
  }
}

function listenUsers() {
  const currentUser = getUserFromSessionStorage();
  if (!currentUser) {
    navigateTo('login');
    return;
  }

  const usersList = document.querySelector('.main__people-list');
  if (usersList) {
    usersList.addEventListener('click', (event: Event) => {
      if (event.target instanceof HTMLElement) {
        const { target } = event;
        const selectedName = document.querySelector('.main__chat-name');
        const selectedStatus = document.querySelector('.main__chat-status');
        if (
          selectedStatus &&
          selectedName &&
          target.classList.contains('main__people-one') &&
          target.textContent &&
          currentUser.login &&
          !(target.textContent === currentUser.login)
        ) {
          connectionData.selectedUser = target.textContent;
          const messagesContainer = document.querySelector('.main__chat-main');
          if (messagesContainer) {
            const firstMessageTemplate = '<div class="main__please-select">Please send your first message!</div>';
            messagesContainer.innerHTML = firstMessageTemplate;
          }
          getMSGSHistory();

          const sendButton = document.querySelector('.button-send');
          const messageArea = document.querySelector('.message-input');
          if (sendButton instanceof HTMLElement && messageArea instanceof HTMLTextAreaElement) {
            sendButton.classList.remove('disabled');
            messageArea.classList.remove('disabled');
            messageArea.value = '';
          }

          selectedName.textContent = target.textContent;
          if (!target.classList.contains('offline')) {
            selectedStatus.textContent = ONLINE;
          } else {
            selectedStatus.textContent = OFFLINE;
          }
        }
      }
    });
  }
}

function renderUserData() {
  const userData = getUserFromSessionStorage();
  if (userData) {
    const userName = document.querySelector('.user-name');
    if (userName) {
      userName.textContent = userData.login;
    }
  }
}

export function clearStorage() {
  sessionStorage.clear();
}

function logoutButtonHandler() {
  connectionData.selectedUser = '';
  logoutUser();
  clearStorage();
  navigateTo('login');
}

export const Main = {
  template: `<div class="main">
    <header class="main__header dark-background">
      <div class="main__header-tittles">
        <div class="main__user-name">User: <span class="user-name">Vasia123456789 1234567890</span>
        </div>

        <div class="main__tittle">FUN CHAT</div>
      </div>

      <div class="main__header-buttons"></div>
    </header>

    <div class="main__main">
      <div class="main__people dark-background">
        <input type="text" class="input people-name" id="peopleName" name="peopleName" placeholder="Enter name">
        <ul class="main__people-list"></ul>
      </div>


      <div class="main__chat dark-background">
        <div class="main__chat-header">
          <div class="main__chat-name"></div>
          <div class="main__chat-status"></div>
        </div>

        <div class="main__chat-main">
          <div class="main__please-select">Please select a recipient!</div>
        </div>

        <div class="main__chat-footer">
        <textarea rows="10" class="input message-input disabled" placeholder="Enter message"></textarea>
        <div class="button button-send disabled">send</div>

        <div class="edit-buttons-container">
          <div class="button button-edit button-edit-cancel hidden">X</div>
          <div class="button button-edit button-edit-ok hidden">V</div>
        </div>

        </div>
      </div>
    </div>

    <footer class="main__footer dark-background">
    <a class="nelany" href="https://github.com/Nelany">Nelany</a>
    <a class="rss" href="https://rs.school/"
        ><img class="rss-img" src="./rs_school.svg" alt="RSSchool"
    /></a>
    <div class="year">2024</div>
    </footer>
  </div>`,

  draw() {
    console.warn(checkLogin(), 'checkLoginЗарег');

    if (checkLogin()) {
      ContentTemplate.draw();

      const content = document.querySelector('.content');
      if (!content) {
        return;
      }
      content.insertAdjacentHTML('beforeend', Main.template);

      Button.draw(
        '.main__header-buttons',
        {
          text: 'About',
          classes: 'about-button',
        },
        {
          type: 'click',
          selector: '.about-button',
          handler: aboutButtonHandler,
        }
      );

      Button.draw(
        '.main__header-buttons',
        {
          text: 'Log out',
          classes: 'logout-button',
        },
        {
          type: 'click',
          selector: '.logout-button',
          handler: logoutButtonHandler,
        }
      );

      renderUserData();
      updateAllUsers();
      listenUsers();
      listenSend();
      listenDelete();
      listenEdit();
      listenEditOptions();
      listenSearch();
      listenReadMessages();
      Popup.draw();
    } else {
      console.warn(checkLogin(), 'checkLoginНЕзарегЕще');
      navigateTo('login');
    }
  },
};
