import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

import {books} from './books';
import Book from './Book';

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



ReactDOM.render(<BookList/>,document.getElementById('root'));
