import { checkLocalStorageForUserData } from '../common/services/localStorage';
import { MainPage } from './MainPage';

export async function startButtonHandler() {
  const restoredUserData = checkLocalStorageForUserData();
  if (restoredUserData) {
    MainPage.draw();
  }
}
