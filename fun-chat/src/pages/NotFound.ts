import { ContentTemplate } from '../components/content/Content';
import { Tag } from '../components/tag/Tag';
import './NotFound.scss';

export const NotFound = {
  draw() {
    ContentTemplate.draw();

    Tag.draw('.content', {
      tag: 'img',
      classes: 'smile',
      src: './emoticon.png',
    });

    Tag.draw('.content', {
      classes: 'notfound-text',
      text: 'PAGE NOT FOUND',
    });
  },
};
