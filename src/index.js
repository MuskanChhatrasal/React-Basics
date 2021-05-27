import React from 'react';
import ReactDOM from 'react-dom';

//Nested Components

function Greeting(){
  return (
    <div>
      <Person /> 
       <p>this is my message</p>
    </div>
  )
}

const Person = () => <h2>Muskan</h2>

ReactDOM.render(<Greeting/>,document.getElementById('root'));
