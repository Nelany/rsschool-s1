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
  id: number;
}

export interface SwitchEngineToDriveModeDTO {
  success?: true;
  status?: number;
}

export interface GetWinner {
  id: number;
  wins: number;
  time: number;
}

export interface UpdateWinner {
  wins: number;
  time: number;
}
