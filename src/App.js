import logo from './logo.svg';
import Show from './components/Show'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component= { Show } />
      <Route exact path='/movie/:movieId/details' component= { MovieDetails } />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
