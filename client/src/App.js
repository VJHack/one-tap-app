import './App.css';
import React, { Fragment } from 'react'
import InputToDo from './components/InputToDo'
import ListToDos from './components/ListToDo'

function App() {
  return (
    <Fragment>
      <div className="block-example border-bottom ">
        <div className="d-flex">
          <div style={{ marginLeft: '5%', marginTop: '2%' }}>
            <h1 >Slice</h1>
          </div>
          <div style={{ marginLeft: '5%', marginTop: '3%' }}>
            <h5> About Slice</h5>
          </div>
          <div style={{ marginLeft: '5%', marginTop: '3%' }} >
            <h5><u>Apply Now</u></h5>
          </div>
          <div style={{ width: '60%', marginTop: '2%' }}>
            <div style={{float: 'right', display: 'flex', background:'black'}}>
              <h5 style={{ paddingTop: 5, paddingRight:20, paddingLeft:20, color: 'white', borderRadius: '10%' }}>Sign In</h5>
            </div>
          </div>
        </div>
      </div>
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
