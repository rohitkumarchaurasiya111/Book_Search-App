import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function BookDetails({ book, onClose }) {
    const {
        authors = "No Author Defined",
        title = "No Title",
        publisher = "Unknown",
        publishedDate = "Unknown",
        description = "No Description"
    } = book.volumeInfo;

    const thumbnail = book.volumeInfo.imageLinks.thumbnail || "https://static.vecteezy.com/system/resources/thumbnails/002/261/122/small_2x/book-icon-black-symbol-isolate-on-white-background-illustration-free-vector.jpg";


    return (
        <div>
            {/* <!-- Modal --> */}
            {/* Without show d-block this modal will not be shown whenver we click on the button */}
            <div className="modal show d-block fade" id="staticBackdrop"  tabIndex="-1" aria-labelledby="bookModalLabel" aria-hidden="true" data-bs-backdrop="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Book Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={thumbnail} className="w-50 mx-auto d-block border p-1 mb-3" alt="Book Cover Page" />
                            <h5 className="card-title mb-3">{title}</h5>
                            <p className="card-text"><b>Author:</b> {authors.join(", ")}</p>
                            <p className="card-text"><b>Publisher: </b>{publisher}</p>
                            <p className="card-text"><b>Published Date: </b>{publishedDate}</p>
                            <p className="card-text"><b>Description: <br></br> </b>{description}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose} data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* This line make the bakground little bit dark whenever we open the modal */}
             <div className="modal-backdrop fade show"></div>
        </div>
    );
}