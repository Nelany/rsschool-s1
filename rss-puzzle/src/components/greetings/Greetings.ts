import { addGreeting } from './GreetingsService';
import './Greetings.scss';

export const Greetings = {
  template: `<h3 class="greeting">Welcome, <span class="greeting-name" id="greetingName"></span>!</h3>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', Greetings.template);
    addGreeting();
  },
};
