import { wordCollections } from '../../common/services/wordCollections';

export const BASIC_OPTION = 0;
export const COMPLETED_OPTION = 1;
export const BASIC_SELECTED_OPTION = 2;
export const COMPLETED_SELECTED_OPTION = 3;

export function getLevelOptions() {
  const optionsDataArray: number[] = [];
  const savedLevelOptions = false;
  if (savedLevelOptions) {
    optionsDataArray.push(1);
  } else {
    const levelsNumber = wordCollections.getLevelsNumber();
    for (let i = 0; i < levelsNumber; i += 1) {
      optionsDataArray.push(BASIC_OPTION);
    }
  }

  return optionsDataArray;
}
export function getRoundOptions() {
  const optionsDataArray: number[] = [];
  const savedRoundOptions = false;
  if (savedRoundOptions) {
    optionsDataArray.push(1);
  } else {
    const levelsNumber = wordCollections.getRoundsNumberOfLevel();
    for (let i = 0; i < levelsNumber; i += 1) {
      optionsDataArray.push(BASIC_OPTION);
    }
  }
  return optionsDataArray;
}
