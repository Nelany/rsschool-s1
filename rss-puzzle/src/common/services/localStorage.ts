import { UserData } from '../types/types';
import { wordCollections } from './wordCollections';

interface Word {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}
interface Round {
  levelData: {
    id: string;
    name: string;
    imageSrc: string;
    cutSrc: string;
    author: string;
    year: string;
  };
  words: Word[];
}

interface Level {
  rounds: Round[];
}

export function checkLocalStorageForUserData(): void | UserData {
  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    return undefined;
  }
  const userData: UserData = JSON.parse(storedUserData);
  return userData;
}

export function saveCurrentRound(currentLevel: Level) {
  const storedRoundArr = localStorage.getItem(`roundArray${wordCollections.currentLevelIndex}`);

  let roundArr: number[] = [];

  if (storedRoundArr) {
    roundArr = JSON.parse(storedRoundArr);
  } else {
    const currentRoundsLength = currentLevel.rounds.length;
    for (let i = 0; i < currentRoundsLength; i += 1) {
      roundArr.push(0);
    }
  }

  const lustCompletedRoundIndex = wordCollections.currentRoundIndex;

  roundArr[wordCollections.currentRoundIndex] = 1;

  const arrRoundsString = JSON.stringify(roundArr);
  localStorage.setItem(`roundArray${wordCollections.currentLevelIndex}`, arrRoundsString);

  const lustRoundString = JSON.stringify(lustCompletedRoundIndex);
  localStorage.setItem('lustCompletedRoundIndex', lustRoundString);

  const lustLevelString = JSON.stringify(wordCollections.currentLevelIndex);
  localStorage.setItem('lustCompletedLevelIndex', lustLevelString);
}

export function saveCurrentLevel() {
  const levelArr: number[] = [];

  const currentLevelsLength = wordCollections.allLevelsData.length;
  for (let i = 0; i < currentLevelsLength; i += 1) {
    levelArr.push(0);
  }

  const lustCompletedLevelIndex = wordCollections.currentLevelIndex;

  const arrLevelsString = JSON.stringify(levelArr);
  localStorage.setItem('levelArray', arrLevelsString);

  const lustLevelString = JSON.stringify(lustCompletedLevelIndex);
  localStorage.setItem('lustCompletedLevelIndex', lustLevelString);
}

export function restoreLastCompleted() {
  const storedCurrentLevelIndex = localStorage.getItem('lustCompletedLevelIndex');
  if (storedCurrentLevelIndex) {
    wordCollections.setCurrentLevelIndex(JSON.parse(storedCurrentLevelIndex));
  }

  const storedCurrentRoundIndex = localStorage.getItem('lustCompletedRoundIndex');
  if (storedCurrentRoundIndex) {
    wordCollections.setCurrentRoundIndex(JSON.parse(storedCurrentRoundIndex) + 1);
    wordCollections.currentSentenceIndex = 0;
  }
}
