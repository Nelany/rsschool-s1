import { sentenceCreator } from './SentenceLineService';
import './SentenceLine.css';
import { wordCollections } from '../../common/services/wordCollections';

export const SentenceLine = {
  answerArray: [] as string[],
  currentSentence: wordCollections.getCurrentSentence(),
  template: `<div class="line"></div>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('afterend', SentenceLine.template);
    sentenceCreator(wordCollections.getCurrentSentence());
    this.answerArray = [];
  },

  getAnswerArray() {
    return SentenceLine.answerArray;
  },

  setAnswerArray(value: string[]) {
    SentenceLine.answerArray = value;
  },
};
