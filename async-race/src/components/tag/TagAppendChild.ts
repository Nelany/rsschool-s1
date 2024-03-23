interface TagParams {
  tag: string;
  classes: string;
  id?: string;
}

export const Tag = {
  tagElement(params: TagParams): HTMLElement {
    const element = document.createElement(params.tag);
    element.className = params.classes;
    if (params.id) {
      element.id = params.id;
    }
    return element;
  },

  draw(parent: string, tagParams: TagParams) {
    const parentElement = document.querySelector(`${parent}`);
    if (!(parentElement instanceof HTMLElement)) {
      return;
    }
    parentElement.appendChild(Tag.tagElement(tagParams));
  },
};
