import { level1 } from '../../assets/data/wordCollectionLevel1';
import { level2 } from '../../assets/data/wordCollectionLevel2';
import { level3 } from '../../assets/data/wordCollectionLevel3';
import { level4 } from '../../assets/data/wordCollectionLevel4';
import { level5 } from '../../assets/data/wordCollectionLevel5';
import { level6 } from '../../assets/data/wordCollectionLevel6';

export const wordCollections = {
  allLevelsData: [level1, level2, level3, level4, level5, level6],

  currentLevelIndex: 0,
  currentRoundIndex: 0,
  currentSentenceIndex: 0,
  isResetField: false,

  getCurrentSentence() {
    const currentLevel = wordCollections.allLevelsData[wordCollections.currentLevelIndex];

    if (currentLevel && currentLevel.rounds.length > 0) {
      const currentRound = currentLevel.rounds[wordCollections.currentRoundIndex];

      if (currentRound && wordCollections.currentSentenceIndex < currentRound.words.length) {
        return currentRound.words[wordCollections.currentSentenceIndex].textExample;
      }
    }

    return 'No sentences available';
  },

  switchToNextSentence() {
    const currentLevel = wordCollections.allLevelsData[wordCollections.currentLevelIndex];

    if (currentLevel && currentLevel.rounds.length > 0) {
      const currentRound = currentLevel.rounds[wordCollections.currentRoundIndex];
      wordCollections.isResetField = false;
      wordCollections.currentSentenceIndex += 1;

      if (wordCollections.currentSentenceIndex >= currentRound.words.length) {
        wordCollections.isResetField = true;
        wordCollections.currentRoundIndex += 1;
        wordCollections.currentSentenceIndex = 0;

        if (wordCollections.currentRoundIndex >= currentLevel.rounds.length) {
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
