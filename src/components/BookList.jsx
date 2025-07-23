import BookCard from "./BookCard";

//This function list all the Books that are in the books state variable
export default function BookList({ books , onSelectingCard}) {
    return (
        <div className="container">
            <div className="row m-2">
                {books.length > 0 ? books.map((book) => (
                    <div key={book.id} className="col-md-4 col-lg-3 mb-4">
                        <BookCard book={book} onSelectingCard={onSelectingCard}/>
                    </div>
                )) : <p>No Books Found</p>}
            </div>
        </div>
    );
}