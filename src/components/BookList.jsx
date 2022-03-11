import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from './context/BookContext';

export default function BookList(params) {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
            <div className="empty"> Sem livros pra ler de momento, cadastre um!</div >
        )
};
