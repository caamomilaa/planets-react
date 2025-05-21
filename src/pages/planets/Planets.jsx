import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { PLANETS_INFO } from '../../constants/planets-info';

const Planets = ({ name }) => {
  //faltan los tabs
  const planetInfo = PLANETS_INFO[name];
  return (
    <>
      <Header />
      <div>
        <span>OVERVIEW</span>
        <span>STRUCTURE</span>
        <span>SURFACE </span>
      </div>
      <div>?imagen chula del planeta?</div>
      <div>
        <h1>{name.toUpperCase()}</h1>
        <p>{planetInfo.texts[0]}</p>
        {/* CAMBIAR SEGUN TAB */}
        <div>
          <span>
            Source:{' '}
            <a target='_blank' href={planetInfo.link}>
              Wikipedia
            </a>
            <img src='/assets/icon-source.svg' alt='' />
          </span>
        </div>
      </div>
      <div>
        <div>
          <p>ROTATION TIME</p>
          <p>? DAYS</p>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <p>? DAYS</p>
        </div>
        <div>
          <p>RADIUS</p>
          <p>? KM</p>
        </div>
        <div>
          <p>AVERAGE TEMP.</p>
          <p>? ºC</p>
        </div>
      </div>
    </>
  );
};
export default Planets;
