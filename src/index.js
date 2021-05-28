import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg',
  title: 'Rich Dad Poor Dad',
  author: 'Robert T. Kiyosaki',
}
const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
  title: 'Ikigai',
  author: 'Héctor García',
}

function BookList(){
  return (
    <section className="bookList">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

 //option 2(props - destructring)
// const Book = ({img,title,author}) =>{

//option 1(props - destructring)
// const {img,title,author} = props;

const Book = (props) =>{
  return (
      <article className='book'>
        <img src={props.img} alt='' />
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        {props.children}
      </article>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));
