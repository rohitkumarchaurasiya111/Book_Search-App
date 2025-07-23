//This is the card component to show for a book
export default function BookCard({ book, onSelectingCard }) {
    const {
        authors = "No Author Defined",
        title = "No Title",
        publisher = "Unknown",
    } = book.volumeInfo;

    const thumbnail = book.volumeInfo.imageLinks.thumbnail || "https://static.vecteezy.com/system/resources/thumbnails/002/261/122/small_2x/book-icon-black-symbol-isolate-on-white-background-illustration-free-vector.jpg";


    {
        title: "No Title Available";
        Author: "Author Not Availabe";
    }
    
    return (
        <div className="card m-3 h-100" style={{ width: "15rem" }}>
            <img src={thumbnail} className="card-img-top" alt="Book Cover Page" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Author: {authors}</p>
                <p className="card-text">Publisher: {publisher}</p>
                <button onClick={()=> onSelectingCard(book)} className="btn btn-primary mt-auto">See More</button>
            </div>
        </div>
    );
}