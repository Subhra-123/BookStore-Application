import React from "react";
import "./bookItem.css";

const BookItem = ({ book }) => {
  const handleClick = () => {
    localStorage.setItem("book", JSON.stringify(book));
  };
  const {title, authors, imageLinks} = book.volumeInfo;
  return (
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <img src={imageLinks.thumbnail} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal"></span>
        <h3>{title}</h3>

        <h4 className="author-heading">Authors:</h4>
        <div className="author">
          {/* <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" /> */}
          {authors?.length > 0
            ? authors.map((author) => <p>{author}</p>)
            : <p>NA</p>}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
