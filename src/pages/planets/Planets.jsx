import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

const Planets = ({ name }) => {
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
				<h1>{name}</h1>
				<p>
					?texto mucho texto acerca del planeta texto mucho texto acerca del
					planeta texto mucho texto acerca del planeta?
				</p>
				<div>
					<span>Source: HAY QUE PONER EL BLANK</span>
					<Link to={'https://es.wikipedia.org/wiki/Wikipedia:Contacto'}>
						??Wikipedia
					</Link>
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
