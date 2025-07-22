import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BookList from '../components/BookList'
import fetchBooks from '../service/api-client'
import useBooks from '../service/useBooks'

function HomePage() {
    //These below codes were the old or primitive way of doing this but we have modified this to an modern and more modular approach
    // // url = 'https://www.googleapis.com/books/v1/volumes?q=java';

    // //This state variable to store the Data of the Books that are coming from the GoogleAPI
    // const [books, setBooks] = useState([]);

    // //This state holds the query i.e. which book to search
    // const [query, setQuery] = useState(initialQuery);

    // //This state tells if the Books data is loaded or still Loading
    // const [loading, setLoading] = useState(false);

    // //This Effect Hook is used to get the Data from API 
    // useEffect(() => {
    //     setLoading(true)
    //     fetchData();
    // }, [query]);

    // //This function fetches the results from API and sets book variable.
    // let fetchData = async () => {
    //     // var response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    //     // let result = await response.json();

    //     // //setBooks(...) doesn't instantly update the books state, because React batches and schedules state updates.
    //     // //So, if we do console.log(books) We will still see the old values only
    //     // setBooks(result.items || []);
    //     // setLoading(false)

    //     try {
    //         let result = await fetchBooks({query});
    //         setBooks(result);
    //     } catch (error) {
    //         console.log("API Fetch Error", error.message);
    //     } finally {
    //         setLoading(false);
    //     }

    // }

    //   //This function will print books in the Console whenever there is change in Books state
    //   // We are not directly printing this in the above useEffect() after fetchBooks() because fetching form an API is asynchronous and even if we print we will get the old state value only.
    //   useEffect(()=>{
    //     console.log(books);
    //   }, [books])


    //Using Custom Hooks - modern Approach
    const { books, setQuery, loading } = useBooks("Fiction");

    //This function takes the value from searchBar and sets that values in query.
    function handleSearch(searchItem) {
        setQuery(searchItem);
    }

    return (
        <div className='d-flex flex-column min-vh-100'>
            <NavBar onSearch={handleSearch} />
            {/* if page is loading i.e. loading=true then below link will show loading in UI if loaded then books will be shown */}
            {loading ? <div className="d-flex justify-content-center align-items-center"><h1>Loading...</h1></div> : <BookList books={books} />}
            <Footer />
        </div>
    )
}

export default HomePage
