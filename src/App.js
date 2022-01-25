import axios from "axios";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./components/BookDetail";
import HomeComponent from "./components/HomeComponent";

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
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomeComponent
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              bookList={bookList}
              fetchData={fetchData}
              
            />
          }
        />
        <Route path="/book/:id" exact element={<BookDetail bookList={bookList} />} />
      </Routes>
    </div>
  );
};

export default App;
