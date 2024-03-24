import { PageTemplate } from './components/pageTemplate/PageTemplate';
import './global.scss';

import { GaragePage } from './pages/GaragePage';
// import { WinnersPage } from './pages/WinnersPage';

function loadApp() {
  PageTemplate.draw();
  GaragePage.draw();

  // setTimeout(() => {
  //   WinnersPage.draw();
  // }, 1000);
}

loadApp();
