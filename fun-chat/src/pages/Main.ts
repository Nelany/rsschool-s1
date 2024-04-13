import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { logoutUser, updateAllUsers } from '../services/api';
import { checkLogin } from '../services/apiHelp';
import { navigateTo } from '../services/router';
import { aboutButtonHandler } from './Login';
import './Main.scss';

export function clearStorage() {
  sessionStorage.clear();
}

function logoutButtonHandler() {
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
          <div class="main__chat-name">Vasia</div>
          <div class="main__chat-status">online</div>
        </div>

        <div class="main__chat-main">

          <div class="message-container incoming-message">
            <div class="message-info">
              <div class="message-sender">Vasia</div>
              <div class="message-date">
                <div class="message-day">12.04.2024,</div>
                <div class="message-time">09:19:15</div>
              </div>
            </div>
            <div class="message-text">Hello, darling!</div>
            <div class="message-status">received</div>
          </div>

          <div class="message-container outgoing-message">
            <div class="message-info">
              <div class="message-sender">You</div>
              <div class="message-date">
                <div class="message-day">12.04.2024,</div>
                <div class="message-time">09:19:15</div>
              </div>
            </div>
            <div class="message-text">Hello, Honney! How are you?</div>
            <div class="message-status">sent</div>
          </div>

          <div class="message-container incoming-message">
            <div class="message-info">
              <div class="message-sender">Vasia</div>
              <div class="message-date">
                <div class="message-day">12.04.2024,</div>
                <div class="message-time">09:19:15</div>
              </div>
            </div>
            <div class="message-text">Hello, darling!</div>
            <div class="message-status">received</div>
          </div>


        </div>

        <div class="main__chat-footer">
        <textarea rows="10" class="input message-input" placeholder="Enter message"></textarea>
        <div class="button">send</div>
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

      updateAllUsers();
    } else {
      console.warn(checkLogin(), 'checkLoginНЕзарегЕще');
      navigateTo('login');
    }
  },
};
