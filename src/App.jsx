import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import Menu from './components/menu/Menu';
import Header from './components/header/header';
import Home from './components/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Router />
    </BrowserRouter>
  );
};

export default App;
