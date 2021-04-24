import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './styles/style.scss';
import './styles/minty/variables.scss';
import {Navbar} from './components/navbar.component'
import {Home} from './components/home.component'
import {RecipeList} from './components/recipe-list.component'
import {ShoppingListList} from './components/shopping-list-list.component'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/recipes" exact component={RecipeList} />
        <Route path="/shopping" exact component={ShoppingListList} />
      </div>
    </Router>
  );
}

export default App;
