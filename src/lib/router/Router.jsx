import { Route, Routes } from 'react-router-dom';
import Planets from '../../pages/planets/Planets';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Planets name='Home' />} />
			<Route path='/mercury' element={<Planets name='Mercury' />} />
			<Route path='/venus' element={<Planets name='Venus' />} />
			<Route path='/earth' element={<Planets name='earth' />} />
			<Route path='/mars' element={<Planets name='mars' />} />
			<Route path='/jupiter' element={<Planets name='jupiter' />} />
			<Route path='/saturn' element={<Planets name='saturn' />} />
			<Route path='/uranus' element={<Planets name='uranus' />} />
			<Route path='/neptune' element={<Planets name='neptune' />} />
		</Routes>
	);
};

export default Router;
