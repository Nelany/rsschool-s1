import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { route } from '../services/route';

function loginButtonHandler() {
  route('login');
}

export const Login = {
  draw() {
    ContentTemplate.draw();

    Button.draw(
      '.content',
      {
        text: 'Login',
        classes: 'login-button',
      },
      {
        type: 'click',
        selector: '.login-button',
        handler: loginButtonHandler,
      }
    );
  },
};
