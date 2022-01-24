import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData=async ()=>{
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    try {
      const res = await axios.get(url);
    console.log(res.data.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
        <SearchBar searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              fetchData={fetchData} />
              
              
            
    </div>
  );
};

export default App;
