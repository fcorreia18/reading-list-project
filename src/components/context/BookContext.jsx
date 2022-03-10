import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';
export const BookContext = createContext()
export default function BookContextProvider(props) {
    // const [books, setBooks] = useState([
    //     { title: 'O Milagre da Manhã', author: 'desconhecido', id: 1 },
    //     { title: 'Seja a tua melhor versão', author: 'desconhecido', id: 2 }
    // ])
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })
    // const addBook = (title, author) => { setBooks([...books, { title, author, id: uuid() }]) }
    // const removeBook = (id) => { setBooks(books.filter(book => book.id !== id)) }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
};
