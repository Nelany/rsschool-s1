import './PageTemplate.scss';

export const PageTemplate = {
  template: `<div class="content">
  <h2 class="main-title">ENGLISH PUZZLE</h2>
  <h4 class="first-description">
      Click on words, collect phrases. <br />
      Words can be drag and drop. Select tooltips in the menu.
  </h4>
</div>`,

  draw() {
    document.body.innerHTML = PageTemplate.template;
  },
};
