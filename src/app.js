import { getRandomColor } from './utils';

export default function initApp() {
    const createButton = document.createElement('button');
    createButton.className = 'button';
    createButton.textContent = 'Изменить цвет страницы';
    document.body.append(createButton);

    createButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
  }