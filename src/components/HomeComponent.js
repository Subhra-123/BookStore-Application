import React from 'react';
import BookItem from './BookItem';
import SearchBar from './SearchBar';

const HomeComponent = ({searchTerm,setSearchTerm,bookList
    ,fetchData}) => {
  return (<div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchData={fetchData}/>
      <div className='book-grid'>
      {bookList.length>0&&bookList.map(book=><BookItem key={book.id} book={book}/>)}
      </div>
  </div>);
};

export default HomeComponent;
