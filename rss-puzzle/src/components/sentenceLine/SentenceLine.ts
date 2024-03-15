import { sentenceCreator } from './SentenceLineService';
import './SentenceLine.scss';
import { wordCollections } from '../../common/services/wordCollections';
import { dragover, drop } from '../../pages/MainPageService';

export const SentenceLine = {
  answerArray: [] as string[],
  currentSentence: wordCollections.getCurrentSentence(),
  template: `<div class="line"></div>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('afterend', SentenceLine.template);
    sentenceCreator(wordCollections.getCurrentSentence());
    this.answerArray = [];
    const line = document.querySelector('.line');
    if (line instanceof HTMLElement) {
      line.addEventListener('dragover', dragover);
      line.addEventListener('drop', drop);
    }
  },

  getAnswerArray() {
    return SentenceLine.answerArray;
  },

  setAnswerArray(value: string[]) {
    SentenceLine.answerArray = value;
  },
};
