import { checkLocalStorageForUserData } from '../../common/services/localStorage';
import { MainPage } from '../../pages/MainPage';

export function openMainPage() {
  const restoredUserData = checkLocalStorageForUserData();
  if (restoredUserData) {
    MainPage.draw();
  }
}
