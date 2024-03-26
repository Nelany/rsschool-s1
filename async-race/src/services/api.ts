import { CreateCarDTO, GetCarDTO } from '../types/apiTypes';

const BASE_URL = 'http://localhost:3000';

export async function getCars(page: number): Promise<{ cars: GetCarDTO[]; total: number }> {
  const response = await fetch(`${BASE_URL}/garage?_limit=7&_page=${page}`);
  if (response.ok) {
    const cars: GetCarDTO[] = await response.json();
    const totalCountHeader = response.headers.get('X-Total-Count');
    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
    return { cars, total };
  }
  return { cars: [], total: 0 };
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
  } catch (error) {
    console.error('Error creating car:', error);
  }
}

export async function deleteCar(carId: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/garage/${carId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete car');
    }
  } catch (error) {
    console.error('Error deleting car:', error);
  }
}

export async function updateCar(carId: number, newData: CreateCarDTO): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/garage/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Failed to update car');
    }
  } catch (error) {
    console.error('Error updating car:', error);
  }
}
