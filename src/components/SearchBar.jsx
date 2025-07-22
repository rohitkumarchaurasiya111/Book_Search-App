import { useState } from "react";

export default function SearchBar({onSearch}){

    //This useState() renders the searchBar component whenever we write something on searchBar as onChange we are calling setSearchItem().
    const [searchItem, setSearchItem] = useState("");

    //Whenever we submit our Form, it will call the function onSearch() which is passed as a prop by the components which call SearchBar and it gives the value of our searchItem to that prop.
    function handleSubmit(event){
        event.preventDefault();
        onSearch(searchItem);
        setSearchItem("");
    }

    return(
        <div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input type='text' className="form-control me-3" placeholder="Search for books" onChange={(e) => setSearchItem(e.target.value)} value={searchItem}/>
            </form>
        </div>
    );
}