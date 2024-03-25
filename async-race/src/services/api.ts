import { CreateCarDTO, GetCarDTO } from '../types/apiTypes';

const BASE_URL = 'http://localhost:3000';

export async function getCars(): Promise<GetCarDTO[]> {
  const response = await fetch(`${BASE_URL}/garage`);
  if (response.ok) {
    const cars: GetCarDTO[] = await response.json();

    return cars;
  }
  return [];
}

export async function createCar(dataParams: CreateCarDTO): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataParams),
    });

    if (!response.ok) {
      throw new Error('Failed to create car');
    }

    // return;
  } catch (error) {
    console.error('Error creating car:', error);
  }
}
