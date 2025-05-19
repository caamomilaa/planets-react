import { Link } from 'react-router-dom';
import {
	StyledCircleEarth,
	StyledCircleJupiter,
	StyledCircleMars,
	StyledCircleMercury,
	StyledCircleNeptune,
	StyledCircleSaturn,
	StyledCircleUranus,
	StyledCircleVenus,
	StyledContainer,
	StyledLi
} from './menu.styles';

const Menu = () => {
	return (
		<nav>
			<ul>
				<StyledLi>
					<Link to='/'>Home</Link>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleMercury />
						<Link to='/mercury'>MERCURY</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleVenus />
						<Link to='/venus'>VENUS</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleEarth />
						<Link to='/earth'>EARTH</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleMars />
						<Link to='/mars'>MARS</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleJupiter />
						<Link to='/jupiter'>JUPITER</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleSaturn />
						<Link to='/saturn'>SATURN</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleUranus />
						<Link to='/uranus'>URANUS</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
				<StyledLi>
					<StyledContainer>
						<StyledCircleNeptune />
						<Link to='/neptune'>NEPTUNE</Link>
					</StyledContainer>
					<img src='/planets-data/assets/icon-chevron.svg' alt='' />
				</StyledLi>
			</ul>
		</nav>
	);
};
export default Menu;
