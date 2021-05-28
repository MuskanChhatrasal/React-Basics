import React from 'react'

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

export default Book
