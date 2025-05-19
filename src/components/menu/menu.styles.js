import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_SIZES } from '../../styles/fontSizes';

const StyledLi = styled.li`
	color: ${COLORS.white};
	font-weight: 700;
	font-size: ${FONT_SIZES.body};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 29px;
	border-bottom: 1px solid ${COLORS.primary300};
`;

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
`;

const StyledCircle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: transparent;
`;

const StyledCircleMercury = styled(StyledCircle)`
	background-color: ${COLORS.mercuryAccent};
`;
const StyledCircleVenus = styled(StyledCircle)`
	background-color: ${COLORS.venusAccent};
`;
const StyledCircleEarth = styled(StyledCircle)`
	background-color: ${COLORS.earthAccent};
`;
const StyledCircleMars = styled(StyledCircle)`
	background-color: ${COLORS.marsAccent};
`;
const StyledCircleJupiter = styled(StyledCircle)`
	background-color: ${COLORS.jupiterAccent};
`;
const StyledCircleSaturn = styled(StyledCircle)`
	background-color: ${COLORS.saturnAccent};
`;
const StyledCircleUranus = styled(StyledCircle)`
	background-color: ${COLORS.uranusAccent};
`;
const StyledCircleNeptune = styled(StyledCircle)`
	background-color: ${COLORS.neptuneAccent};
`;

export {
	StyledLi,
	StyledContainer,
	StyledCircleMercury,
	StyledCircleVenus,
	StyledCircleEarth,
	StyledCircleMars,
	StyledCircleJupiter,
	StyledCircleSaturn,
	StyledCircleUranus,
	StyledCircleNeptune
};
