import React, { useContext } from 'react';
import { BookContext } from './context/BookContext';

export default function Navbar(props) {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Lista de leituras a fazer</h1>
            <p>atualmente tu tens {books.length} livros pra ler...</p>
        </div>
    );
};
