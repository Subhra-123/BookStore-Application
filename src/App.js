import axios from "axios";
import React, { useState } from "react";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookList, setBookList] = useState([]);

  const fetchData=async ()=>{
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    try {
      const res = await axios.get(url);
    console.log(res.data.items);
    setBookList(res.data.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
        <SearchBar searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              fetchData={fetchData} />
              <div className="book-grid">

              {bookList.length>0?bookList.map(book=><BookItem book={book}/>):null}
              </div>
              
              
            
    </div>
  );
};

export default App;
