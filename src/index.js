import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//Nested Components

function BookList(){
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () =>{
  return (
      <article className='book'>
        <Image />
        <Title />
        <Author />
      </article>
  )
}

const Image = () => <img src='https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg' alt='' />

const Title = () => <h1>Rich Dad Poor Dad</h1>

const Author = () => <h3>Robert T. Kiyosaki</h3>

ReactDOM.render(<BookList/>,document.getElementById('root'));
