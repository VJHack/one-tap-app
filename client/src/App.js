import './App.css';
import React, { Fragment } from 'react'
import InputToDo from './components/InputToDo'
import ListToDos from './components/ListToDo'
import Header from './components/Header'
function App() {
  return (
    <Fragment>
      <Header/>
      <div className="container">

        {/*<InputToDo />
      <InputToDo />
      <InputToDo /> 
      <InputToDo />*/}
        <ListToDos />
      </div>
    </Fragment>
  );
}

export default App;
