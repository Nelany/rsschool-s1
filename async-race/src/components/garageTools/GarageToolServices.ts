import { Button } from '../button/Button';
import { Tag } from '../tag/TagAppendChild';

export function createCreateForm() {
  Tag.draw('header__garage-tools-container', {
    tag: 'form',
    classes: 'header__input-create-form header__container',
  });

  Tag.draw('header__input-create-form', {
    tag: 'input',
    classes: 'input input-text input-text-create',
    id: 'createName',
    type: 'text',
  });

  Tag.draw('header__input-create-form', {
    tag: 'input',
    classes: 'input input-color input-color-create',
    id: 'createColor',
    type: 'color',
  });

  Button.draw('header__input-create-form', {
    text: 'Create',
    classes: 'small-button button-create',
    isSubmit: true,
  });
}

export function createUpdateForm() {
  Tag.draw('header__garage-tools-container', {
    tag: 'form',
    classes: 'header__input-update-form header__container',
  });

  Tag.draw('header__input-update-form', {
    tag: 'input',
    classes: 'input input-text input-text-update',
    id: 'updateName',
    type: 'text',
  });

  Tag.draw('header__input-update-form', {
    tag: 'input',
    classes: 'input input-color input-color-update',
    id: 'updateColor',
    type: 'color',
  });

  Button.draw('header__input-update-form', {
    text: 'Update',
    classes: 'small-button button-update',
    isSubmit: true,
  });
}

export function createToolsButtons() {
  Tag.draw('header__garage-tools-container', {
    tag: 'div',
    classes: 'header__tools-buttons-container header__container',
  });

  Button.draw('header__tools-buttons-container', {
    text: 'RACE',
    classes: 'button small-button race-button',
  });

  Button.draw('header__tools-buttons-container', {
    text: 'RESET',
    classes: 'button small-button reset-button',
  });

  Button.draw('header__tools-buttons-container', {
    text: 'CREATE CARS',
    classes: 'button big-button button-create-cars',
  });
}
