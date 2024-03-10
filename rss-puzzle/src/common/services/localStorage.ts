import { UserData } from '../types/types';

export function checkLocalStorageForUserData(): void | UserData {
  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    return undefined;
  }
  const userData: UserData = JSON.parse(storedUserData);
  return userData;
}
