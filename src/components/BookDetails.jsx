import React, { useContext } from 'react';
import { BookContext } from './context/BookContext';
export default function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <div className="title"> {book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
};
