import React from 'react'
import BookTitles from '../../components/book-table-Falta/book-titles.component';
import BookForm from '../../components/book-table-Falta/book-input.component';
import "./bookPage.styles.css";

const ContactPage = () => {
  return (
    <div className='formulario'>
      <BookTitles/>
      <BookForm/>
    </div>
  )
}

export default ContactPage;