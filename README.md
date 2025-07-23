# Book Search App 🔍

A React-based application that lets you search for books by title, author, or ISBN using the Google Books API. Built with Create React App, styled with your choice of CSS framework, and easy to customize or deploy.

---

## 🧱 Features

- Search for books by title, author, or ISBN.
- Displays up to 20 results in cards, showing title, author, and thumbnail.
- Click through to a detailed view with description, ratings, genres, and more.
- Responsive layout for desktop and mobile.
- Option to save favorites (can be implemented later if needed).

---

## 🛠️ Tech Stack

- React (Create React App)
- [Google Books API](https://developers.google.com/books)
- Axios (or Fetch) for HTTP requests
- Bootstrap 
---

## 📥 Setup & Running Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/rohitkumarchaurasiya111/Book_Search-App.git
   cd Book_Search-App

2. **Install dependencies**  
   ```bash
   npm install

2. **Run in development**  
   ```bash
   npm run dev

---

## 🧩 Project Structure

Book_Search-App/
├── public/
├── src/
│   ├── components/        # Reusable UI (SearchBar, BookCard, etc.)
│   ├── pages/             # Screens (SearchPage, DetailPage)
│   ├── api/               # Google Books API wrapper
│   ├── context/           # (If using Context API)
│   ├── App.js
│   ├── index.js
│   └── styles/            # Stylesheets or theme configs
├── .env
├── package.json
└── README.md

---
## 📈 Future Enhancements

- Add pagination to handle more than 20 results
- Integrate user authentication to allow rating/reviewing
- Save favorite books to local storage or backend
- Improve UI/UX with enhanced design and animations
- Add unit/integration tests (Jest, React Testing Library)

---

## 📚 Acknowledgments

- [Google Books API](https://developers.google.com/books)
- Inspired by similar React book search projects (thanks to their authors!)

---

## ✉️ Contact

Built by **Rohit Kumar Chaurasiya** – feel free to connect:

- GitHub: [@rohitkumarchaurasiya111](https://github.com/rohitkumarchaurasiya111)
- Email: rohitkumarchaurasiya111@gmail.com



