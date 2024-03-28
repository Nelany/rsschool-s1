import { CreateCarDTO, GetCarDTO, StartStopCarsEngineDTO, SwitchEngineToDriveModeDTO } from '../types/apiTypes';

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
