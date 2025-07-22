//Creating Custom Hook , Custom Hooks name should begin with use

import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

export default function useBooks(initialQuery){

    //This state variable to store the Data of the Books that are coming from the GoogleAPI
    const [books, setBooks] = useState([]);

    //This state holds the query i.e. which book to search
    const [query, setQuery] = useState(initialQuery);

    //This state tells if the Books data is loaded or still Loading
    const [loading, setLoading] = useState(false);

    //Fetches the Book and sets it to state books
    useEffect(()=>{
        async function fetchBooksData(query){
            setLoading(true)
            try {
                const items = await fetchBooks({query});
                setBooks(items);
            } catch (error) {
                if(error.name !== "AbortError"){
                    console.log("API Error",error.message);
                }
            } finally{
                setLoading(false)
            }
        }

        //Books will only be fetched if initalQuery value is given
        if(initialQuery)
            fetchBooksData(query);
    }, [query]);  //This useEffect will run if there is any changes in the query state variable.

    return {books, setQuery, loading}
}