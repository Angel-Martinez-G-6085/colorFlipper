import './inicio.scss';
import INICIO from './inicio.html';
import { changeColor } from '../../utils/changeColor';

export const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
  changeColor();
};
