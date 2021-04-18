import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductsAdd from './ProductsAdd';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/add" component={ProductsAdd} />
            <Route path="/products/modify" component={ProductsAdd} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
