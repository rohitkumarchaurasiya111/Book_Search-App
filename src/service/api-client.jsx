export default async function fetchBooks({query}){
    const BASE_URL = "https://www.googleapis.com/books/v1";

    try {
        let response = await fetch(`${BASE_URL}/volumes?q=${query}&maxResults=20`);
        if(!response.ok){
            throw new Error(`API Call filed: ${response.status}`);
        }
        let data = await response.json();
        return data.items || [];
    } catch (error) {
        console.log("API Error Occured", error.message);
    }
}