import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './styles/style.scss';
import './styles/minty/variables.scss';
import {RecipeList} from './components/recipe-list.component'

function App() {
  return (
    <div className="container">
      <RecipeList />
    </div>
  );
}

export default App;
