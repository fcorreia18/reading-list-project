import React, { useContext, useState } from 'react';
import { BookContext } from './context/BookContext';

export default function NewBookForm(params) {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author } });
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="adiciona o titulo do livro" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="text" placeholder="adiciona o nome do Autor" value={author} onChange={e => setAuthor(e.target.value)} required />
            <input type="submit" value="Adicionar" />
        </form>
    );
};
