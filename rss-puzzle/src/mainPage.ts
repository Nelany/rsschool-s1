export function createMainPage() {
  const contentElement = document.querySelector('.content');
  if (contentElement) {
    contentElement.classList.add('content-fadeout');
    const mainHTML = `
  <div class="content content-fadeout main-content">
      <h2 class="main-title">MAIN PAGE</h2>
  </div>
`;
    setTimeout(() => {
      document.body.innerHTML = mainHTML;
    }, 1000);
  }
}
