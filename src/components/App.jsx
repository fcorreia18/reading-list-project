import React from 'react';
import Navbar from './Navbar';
import BookContextProvider from './context/BookContext';
import BookList from './BookList';
import Footer from './Footer';
import '../assets/css/style.css';
import NewBookForm from './BookForm';


export default function () {

    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
                <NewBookForm />
                <Footer/>
            </BookContextProvider>
        </div>
    );
}
