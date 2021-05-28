import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const books = [
 {
  id: 1,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg',
  title: 'Rich Dad Poor Dad',
  author: 'Robert T. Kiyosaki',
 },
 {
  id: 2,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
  title: 'Ikigai',
  author: 'Héctor García',
 },
]

function BookList(){
  return (
    <section className="bookList"> {books.map((book)=>{
      return (
        <Book key={book.id} {...book}/>
        )
    })} </section>
  )
}

 //option 2(props - destructring)
// const Book = ({img,title,author}) =>{

//option 1(props - destructring)
// const {img,title,author} = props;

const Book = (props) =>{
  const {img,title,author} = props;
  const clickHandler = () =>{
    alert ('Hello World');
  }
  return (
      <article className='book'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h3>{author}</h3>
        <button type='button' onClick={clickHandler}>Refrence Example</button>
      </article>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));
