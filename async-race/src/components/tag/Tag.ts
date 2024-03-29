interface TagParams {
  classes: string;
  tag?: string;
  id?: string;
  type?: string;
  text?: string;
  alt?: string;
  src?: string;
  dataId?: string;
  required?: boolean;
  value?: string;
}

export const Tag = {
  tagElement(params: TagParams): HTMLElement {
    const element = document.createElement(params.tag || 'div');
    element.className = params.classes;
    if (params.id) {
      element.id = params.id;
    }
    if (params.type && element instanceof HTMLInputElement) {
      element.type = params.type;
      if (params.id) {
        element.name = params.id;
      }
      if (params.required) {
        element.required = params.required;
      }
    }
    if (params.value && element instanceof HTMLInputElement) {
      element.value = params.value;
    }
    if (params.text) {
      element.textContent = params.text;
    }
    if (params.alt && element instanceof HTMLImageElement) {
      element.alt = params.alt;
    }
    if (params.src && element instanceof HTMLImageElement) {
      element.src = params.src;
    }
    if (params.dataId) {
      element.setAttribute('data-id', params.dataId);
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
