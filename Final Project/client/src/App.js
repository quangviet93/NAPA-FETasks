import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import HomePage from './components/view/HomePage';
import Auth from './components/view/Auth';
import CreateProduct from './components/layout/CreateProduct';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/post' component={HomePage} />
        <Route exact path='/post/create' component={CreateProduct} />
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
      </Switch>
    </Router>
  );
}

export default App;
