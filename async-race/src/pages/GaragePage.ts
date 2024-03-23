import { GarageTools } from '../components/garageTools/GarageTools';
import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { Tag } from '../components/tag/TagAppendChild';

export const GaragePage = {
  draw() {
    PageTemplate.draw();

    Tag.draw('header', {
      tag: 'div',
      classes: 'header__garage-tools-container',
    });

    GarageTools.draw();
  },
};
