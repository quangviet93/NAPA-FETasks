import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Posts from './components/layout/Posts';
import Auth from './components/view/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/post' component={Posts} />
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
      </Switch>
    </Router>
  );
}

export default App;
