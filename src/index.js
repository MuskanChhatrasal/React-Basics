import React from 'react';
import ReactDOM from 'react-dom';

//JSX Rules
//return single element
//div / section / article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

function Greeting(){
  return <h4>This is Muskan and this is my first component</h4>
}

ReactDOM.render(<Greeting/>,document.getElementById('root'));
