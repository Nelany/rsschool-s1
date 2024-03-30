import {
  CreateCarDTO,
  GetCarDTO,
  GetWinnerDTO,
  StartStopCarsEngineDTO,
  SwitchEngineToDriveModeDTO,
  UpdateWinnerDTO,
} from '../types/apiTypes';

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

export async function startStopEngine(
  carId: number,
  status: 'started' | 'stopped'
): Promise<StartStopCarsEngineDTO | null> {
  if (!Number.isInteger(carId) || carId <= 0 || !['started', 'stopped'].includes(status)) {
    console.error('Wrong parameters');
    return null;
  }

  try {
    const response = await fetch(`${BASE_URL}/engine?id=${carId}&status=${status}`, {
      method: 'PATCH',
    });

    if (response.ok) {
      const data: StartStopCarsEngineDTO = await response.json();

      return { ...data, id: carId };
    }
    if (response.status === 404) {
      console.error('Car with such id was not found in the garage.');
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return null;
}

export async function switchEngineToDriveMode(carId: number): Promise<SwitchEngineToDriveModeDTO | null> {
  if (!Number.isInteger(carId) || carId <= 0) {
    console.error('Wrong parameters: "id" should be any positive number');
    return null;
  }

  try {
    const response = await fetch(`${BASE_URL}/engine?id=${carId}&status=drive`, {
      method: 'PATCH',
    });

    if (response.ok) {
      const data: SwitchEngineToDriveModeDTO = await response.json();
      return data;
    }
    if (response.status === 400) {
      const errorData = await response.json();
      console.error('Wrong parameters:', errorData.message);
    } else if (response.status === 404) {
      console.error(
        'Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?'
      );
    } else if (response.status === 429) {
      console.error("Drive already in progress. You can't run drive for the same car twice while it's not stopped.");
    } else if (response.status === 500) {
      console.error("Car has been stopped suddenly. It's engine was broken down.");
      return {
        status: response.status,
      };
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return null;
}

export async function getWinner(winnerId: number): Promise<GetWinnerDTO | null> {
  const response = await fetch(`${BASE_URL}/winners/${winnerId}`);
  if (response.ok) {
    const winner: GetWinnerDTO = await response.json();
    return winner;
  }
  if (response.status === 404) {
    console.error('Winner not found');
    return null;
  }

  console.error('Error:', response.statusText);
  return null;
}

export async function createWinner(newWinner: GetWinnerDTO): Promise<GetWinnerDTO> {
  const response = await fetch(`${BASE_URL}/winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWinner),
  });

  if (response.ok) {
    const createdWinner: GetWinnerDTO = await response.json();
    return createdWinner;
  }
  if (response.status === 500) {
    throw new Error('Insert failed, duplicate id');
  } else {
    throw new Error('Failed to create winner');
  }
}

export async function updateWinner(winnerId: number, updatedWinnerData: UpdateWinnerDTO): Promise<GetWinnerDTO> {
  const response = await fetch(`${BASE_URL}/winners/${winnerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedWinnerData),
  });

  if (response.ok) {
    const updatedWinner: GetWinnerDTO = await response.json();
    return updatedWinner;
  }
  if (response.status === 404) {
    throw new Error('Winner not found');
  } else {
    throw new Error('Failed to update winner');
  }
}

export async function getWinners(page?: number): Promise<{ winners: GetWinnerDTO[]; total: number }> {
  let url = `${BASE_URL}/winners?_limit=10&_sort=time&_order=ASC`;

  if (page) {
    url += `&_page=${page}`;
  }

  const response = await fetch(url);
  if (response.ok) {
    const winners: GetWinnerDTO[] = await response.json();
    const totalCountHeader = response.headers.get('X-Total-Count');
    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
    return { winners, total };
  }
  return { winners: [], total: 0 };
}

export async function getCar(carId: number): Promise<GetCarDTO | null> {
  try {
    const response = await fetch(`${BASE_URL}/garage/${carId}`);
    if (response.ok) {
      const carData: GetCarDTO = await response.json();
      return carData;
    }
    if (response.status === 404) {
      return null;
    }
    throw new Error('Failed to get car data');
  } catch (error) {
    console.error('Error getting car data:', error);
    return null;
  }
}

export async function deleteWinner(id: number): Promise<void> {
  try {
    const response = await fetch(`${BASE_URL}/winners/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.warn('Error deleting winner:', Error);
    }
  } catch (error) {
    console.warn('Error deleting winner:', error);
  }
}
