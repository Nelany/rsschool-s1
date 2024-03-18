import { level1 } from '../../assets/data/wordCollectionLevel1';
import { level2 } from '../../assets/data/wordCollectionLevel2';
import { level3 } from '../../assets/data/wordCollectionLevel3';
import { level4 } from '../../assets/data/wordCollectionLevel4';
import { level5 } from '../../assets/data/wordCollectionLevel5';
import { level6 } from '../../assets/data/wordCollectionLevel6';
import { saveCurrentLevel, saveCurrentRound } from './localStorage';

export const wordCollections = {
  allLevelsData: [level1, level2, level3, level4, level5, level6],

  currentLevelIndex: 0,
  currentRoundIndex: 0,
  currentSentenceIndex: 0,
  isResetField: false,
  isRestoredRound: false,

  getLevelsNumber() {
    return wordCollections.allLevelsData.length;
  },

  getRoundsNumberOfLevel() {
    return wordCollections.allLevelsData[wordCollections.currentLevelIndex].rounds.length;
  },

  getCurrentLevelIndex() {
    return wordCollections.currentLevelIndex;
  },

  setCurrentLevelIndex(levelIndex: number) {
    this.currentLevelIndex = levelIndex;
    this.currentRoundIndex = 0;
    this.currentSentenceIndex = 0;
  },

  getCurrentRoundIndex() {
    return wordCollections.currentLevelIndex;
  },

  setCurrentRoundIndex(RoundIndex: number) {
    this.currentRoundIndex = RoundIndex;
    this.currentSentenceIndex = 0;
  },

  getLevelRoundId() {
    return `${wordCollections.currentLevelIndex}_${wordCollections.currentRoundIndex}_${wordCollections.currentSentenceIndex}`;
  },

  getCurrentSentence(): string {
    const currentLevel = wordCollections.allLevelsData[wordCollections.currentLevelIndex];
    if (wordCollections.currentRoundIndex >= currentLevel.rounds.length) {
      wordCollections.switchToNextSentence();
      return wordCollections.getCurrentSentence();
    }
    if (currentLevel && currentLevel.rounds.length > 0) {
      const currentRound = currentLevel.rounds[wordCollections.currentRoundIndex];

      if (currentRound && wordCollections.currentSentenceIndex < currentRound.words.length) {
        return currentRound.words[wordCollections.currentSentenceIndex].textExample;
      }
    }

    return 'No sentences available';
  },

  getCurrentTranslate(): string {
    return wordCollections.allLevelsData[wordCollections.currentLevelIndex].rounds[wordCollections.currentRoundIndex]
      .words[wordCollections.currentSentenceIndex].textExampleTranslate;
  },

  switchToNextSentence() {
    const currentLevel = wordCollections.allLevelsData[wordCollections.currentLevelIndex];

    if (wordCollections.isRestoredRound) {
      wordCollections.currentRoundIndex += 1;

      if (wordCollections.currentRoundIndex >= currentLevel.rounds.length) {
        wordCollections.isResetField = true;
        wordCollections.currentLevelIndex += 1;
        wordCollections.currentSentenceIndex = 0;
        wordCollections.currentRoundIndex = 0;

        if (wordCollections.currentLevelIndex >= wordCollections.allLevelsData.length) {
          wordCollections.isResetField = true;
          wordCollections.currentLevelIndex = 0;
          wordCollections.currentRoundIndex = 0;
          wordCollections.currentSentenceIndex = 0;
        }
      }
      wordCollections.isRestoredRound = false;
    } else if (currentLevel && currentLevel.rounds.length > 0) {
      const currentRound = currentLevel.rounds[wordCollections.currentRoundIndex];
      wordCollections.isResetField = false;
      wordCollections.currentSentenceIndex += 1;

      if (wordCollections.currentSentenceIndex >= currentRound.words.length) {
        saveCurrentRound(currentLevel);

        wordCollections.isResetField = true;
        wordCollections.currentRoundIndex += 1;
        wordCollections.currentSentenceIndex = 0;

        if (wordCollections.currentRoundIndex >= currentLevel.rounds.length) {
          saveCurrentLevel();

          wordCollections.isResetField = true;
          wordCollections.currentLevelIndex += 1;
          wordCollections.currentRoundIndex = 0;

          if (wordCollections.currentLevelIndex >= wordCollections.allLevelsData.length) {
            wordCollections.isResetField = true;
            wordCollections.currentLevelIndex = 0;
            wordCollections.currentRoundIndex = 0;
            wordCollections.currentSentenceIndex = 0;
          }
        }
      }
    }
  },
};
