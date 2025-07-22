//This is the card component to show for a book
export default function BookCard({ book }) {

    const title = book.volumeInfo.title;
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || "https://static.vecteezy.com/system/resources/thumbnails/002/261/122/small_2x/book-icon-black-symbol-isolate-on-white-background-illustration-free-vector.jpg";
    const author = book.volumeInfo.authors;
    const publisher = book.volumeInfo.publisher;
    const publishedDate = book.volumeInfo.publishedDate;
    
    return (
        <div className="card m-3 h-100" style={{ width: "15rem" }}>
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Author: {author}</p>
                <p className="card-text">Publisher: {publisher}</p>
                <p className="card-text">Published Date: {publishedDate}</p>
                <a href="#" className="btn btn-primary mt-auto">OpenBook</a>
            </div>
        </div>
    );
}