import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Mercury</Link>
      </li>
      <li>
        <Link to='/venus'>venus</Link>
      </li>
      <li>
        <Link to='/earth'>earth</Link>
      </li>
      <li>
        <Link to='/mars'>mars</Link>
      </li>
      <li>
        <Link to='/jupiter'>jupiter</Link>
      </li>
      <li>
        <Link to='/saturn'>saturn</Link>
      </li>
      <li>
        <Link to='/uranus'>uranus</Link>
      </li>
      <li>
        <Link to='/neptune'>neptune</Link>
      </li>
    </ul>
  );
};
export default Menu;
