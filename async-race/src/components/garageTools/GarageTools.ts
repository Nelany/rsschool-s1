import { createCreateForm, createToolsButtons, createUpdateForm } from './GarageToolServices';

export const GarageTools = {
  draw() {
    createCreateForm();
    createUpdateForm();
    createToolsButtons();
  },
};
