import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';


const author = 'Robert T. Kiyosaki';
const title = 'Rich Dad Poor Dad';
function BookList(){
  return (
    <section className="bookList">
      <Book />
    </section>
  )
}

const Book = () =>{
  return (
      <article className='book'>
        <img src='https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg' alt='' />
        <h1>{title}</h1>
        <h3>{author}</h3>
      </article>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));
