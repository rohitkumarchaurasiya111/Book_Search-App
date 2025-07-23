export default function Footer() {
    return (
        <footer className="bg-light text-dark py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <h5 className="mb-2">Connect with me</h5>
                        <a
                            href="https://github.com/rohitkumarchaurasiya111/Book_Search-App.git"
                            className="text-dark me-3 text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github me-1"></i> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rohit-kumar-chaurasiya-0862b1272/"
                            className="text-dark text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin me-1"></i> LinkedIn
                        </a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 small">
                            © 2025 <strong>BookShelf</strong>, All Rights Reserved by <strong>Creator</strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
