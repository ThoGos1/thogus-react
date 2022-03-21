import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./lib/init-firebase";



export default function ListBook() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])


    useEffect(() => {
        console.log(books);
    }, [books])


    
    function getBooks() {
        const bookCollectionRef = collection(db, 'books');
        getDocs(bookCollectionRef).then(response => {
            const boks = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))

            setBooks(boks);

        }).catch(error => console.log(error.message));
    }

    return (

        <div>
            <h3>books</h3>

            <ul>
                {books.map(book => <li key={book.id} style={{margin: '20px'}}>{book.data.title}</li>)}
            </ul>

            <button onClick={() => getBooks()}>Refresh list of book.</button>

        </div>

    )



}