import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { Login } from '../components/login/Login';

export const LoginPage = {
  draw() {
    PageTemplate.draw();

    const contentElement = document.querySelector('.content');

    if (contentElement instanceof HTMLElement) {
      Login.draw(contentElement);
    }
  },
};
