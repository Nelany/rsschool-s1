import { GetCarDTO } from '../types/apiTypes';

const BASE_URL = 'http://localhost:3000';

export async function getCars(): Promise<GetCarDTO[]> {
  const response = await fetch(`${BASE_URL}/garage`);
  if (response.ok) {
    const cars: GetCarDTO[] = await response.json();

    return cars;
  }
  return [];
}
