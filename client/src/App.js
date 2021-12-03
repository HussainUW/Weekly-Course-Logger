import React, {Fragment} from "react";
import './App.css';

//components

import InputTodo from "./components/InputTodo";
//Fragments are used in react to return a number of child elements grouped together, as if we were running a number 
//of functions one after another, rendering frontend in a group

function App() {
  return( 
  <Fragment>
    <div className="container">
      <InputTodo />
    </div>
  </Fragment>
  );
}

export default App;
