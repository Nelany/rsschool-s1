import './header.scss';

export const headerTemplate = {
  template: `<header class="header">
  <div class="header__page-button-container header__container">
  </div>
</header>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.innerHTML = headerTemplate.template;
  },
};
