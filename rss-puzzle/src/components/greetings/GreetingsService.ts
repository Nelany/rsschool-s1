import { UserData } from '../../common/types/types';

function displayGreetingName(greetingName: HTMLElement): void {
  const fullNameContainer = greetingName;

  if (fullNameContainer) {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData: UserData = JSON.parse(storedUserData);
      const fullName = `${userData.firstName} ${userData.lastName}`;
      fullNameContainer.textContent = fullName;
    }
  }
}

export function addGreeting() {
  const greetingName = document.getElementById('greetingName');

  if (greetingName) {
    displayGreetingName(greetingName);
  }
}
