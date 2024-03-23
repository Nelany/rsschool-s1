import './footer.scss';

export const footerTemplate = {
  template: `<footer class="footer">
  <div class="footer__buttons buttons-container"></div>
</footer>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.innerHTML += footerTemplate.template;
  },
};
