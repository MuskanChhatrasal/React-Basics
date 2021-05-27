import React from 'react';
import ReactDOM from 'react-dom';

//Nested Components

function BookList(){
  return (
    <section>
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
      <article>
        <Image />
        <Title />
        <Author />
      </article>
  )
}

const Image = () => <img src='https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg' alt='' />

const Title = () => <h2>Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class</h2>

const Author = () => <h3>Robert T. Kiyosaki</h3>

ReactDOM.render(<BookList/>,document.getElementById('root'));
