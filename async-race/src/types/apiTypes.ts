export interface CreateCarDTO {
  name: string;
  color: string;
}
export interface GetCarDTO extends CreateCarDTO {
  id: number;
}

export interface StartStopCarsEngineDTO {
  velocity: number;
  distance: number;
}

export interface SwitchEngineToDriveModeDTO {
  success: true;
}
