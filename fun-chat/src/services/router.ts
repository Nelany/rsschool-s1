import { ContentTemplate } from '../components/content/Content';
import { Tag } from '../components/tag/Tag';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';

const BASE_URL = 'http://localhost:8080/';

const routes = {
  '404': {
    title: '404',
    description: 'Page not found',
    page: () => {
      NotFound.draw();
    },
  },
  login: {
    title: 'Log In',
    description: 'This is the login page',
    page: () => {
      Login.draw();
    },
  },
  about: {
    title: 'About Us',
    description: 'This is the about page',
    page: () => {
      About.draw();
    },
  },
  main: {
    title: 'Chat',
    description: 'This is the chat page',
    page: () => {
      Main.draw();
    },
  },
};
export function locationHandler() {
  let location = window.location.hash.replace('#', '') as keyof typeof routes;
  if (location.length === 0) {
    location = 'login';
    window.location.hash = '#login';
    return;
  }

  const currentRoute = routes[location] || routes['404'];

  currentRoute.page();
  document.title = currentRoute.title;
  document.querySelector('meta[name="description"]')!.setAttribute('content', currentRoute.description);
}

export function navigateTo(location: string) {
  window.history.pushState({}, '', `${BASE_URL}#${location}`);
  locationHandler();
}

export function wait() {
  ContentTemplate.draw();

  Tag.draw('.content', {
    classes: 'notfound-text',
    text: 'WAIT A MINUTE, PLEASE!',
  });
}
