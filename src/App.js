import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductsAdd from './ProductsAdd';

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
            <Route path="/login" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
