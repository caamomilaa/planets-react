import { v4 } from 'uuid';
import { COLORS } from '../styles/Colors';

export const MENU_INFO = [
  {
    id: v4(),
    link: '/mercury',
    text: 'MERCURY',
    color: COLORS.mercuryAccent
  },
  {
    id: v4(),
    link: '/venus',
    text: 'VENUS',
    color: COLORS.venusAccent
  },
  {
    id: v4(),
    link: '/earth',
    text: 'EARTH',
    color: COLORS.earthAccent
  },
  {
    id: v4(),
    link: '/mars',
    text: 'MARS',
    color: COLORS.marsAccent
  },
  {
    id: v4(),
    link: '/jupiter',
    text: 'JUPITER',
    color: COLORS.jupiterAccent
  },
  {
    id: v4(),
    link: '/saturn',
    text: 'SATURN',
    color: COLORS.saturnAccent
  },
  {
    id: v4(),
    link: '/uranus',
    text: 'URANUS',
    color: COLORS.uranusAccent
  },
  {
    id: v4(),
    link: '/neptune',
    text: 'NEPTUNE',
    color: COLORS.neptuneAccent
  }
];
