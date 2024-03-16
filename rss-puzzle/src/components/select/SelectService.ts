import { wordCollections } from '../../common/services/wordCollections';
import { MainPage } from '../../pages/MainPage';

export const BASIC_OPTION = 0;
export const COMPLETED_OPTION = 1;
export const BASIC_SELECTED_OPTION = 2;
export const COMPLETED_SELECTED_OPTION = 3;

export function getLevelOptions() {
  let optionsDataArray: number[] = [];
  const storedLevelArr = localStorage.getItem('levelArray');
  const storedLustCompletedLevelIndex = localStorage.getItem('lustCompletedLevelIndex');

  if (storedLevelArr && storedLustCompletedLevelIndex) {
    optionsDataArray = JSON.parse(storedLevelArr);
  } else {
    const levelsNumber = wordCollections.getLevelsNumber();
    for (let i = 0; i < levelsNumber; i += 1) {
      optionsDataArray.push(BASIC_OPTION);
    }
  }

  return optionsDataArray;
}
export function getRoundOptions() {
  let optionsDataArray: number[] = [];
  const storedRoundArr = localStorage.getItem(`roundArray${wordCollections.currentLevelIndex}`);
  const storedLustCompletedRoundIndex = localStorage.getItem('lustCompletedRoundIndex');

  if (storedRoundArr && storedLustCompletedRoundIndex) {
    optionsDataArray = JSON.parse(storedRoundArr);
  } else {
    const levelsNumber = wordCollections.getRoundsNumberOfLevel();
    for (let i = 0; i < levelsNumber; i += 1) {
      optionsDataArray.push(BASIC_OPTION);
    }
  }
  return optionsDataArray;
}

export function selectsChangeListener(event: Event) {
  if (event.target instanceof HTMLSelectElement && event.target.classList.contains('select-level')) {
    const { selectedIndex } = event.target;
    const selectedOption = event.target.options[selectedIndex];
    wordCollections.setCurrentLevelIndex(parseInt(selectedOption.value, 10) - 1);
    MainPage.draw();
  }
  if (event.target instanceof HTMLSelectElement && event.target.classList.contains('select-round')) {
    const { selectedIndex } = event.target;
    const selectedOption = event.target.options[selectedIndex];
    wordCollections.setCurrentRoundIndex(parseInt(selectedOption.value, 10) - 1);
    MainPage.draw();
  }
}
