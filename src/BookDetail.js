import React from "react";
import "./bookDetail.css";

const BookDetail = () => {
  const book = JSON.parse(localStorage.getItem("book"));
  const {
    title,
    authors,
    publisher,
    description,
    publishedDate,
    imageLinks,
    pageCount,
    previewLink,
  } = book.volumeInfo;

  return (
    <div className="book-detail-grid">
      <div className="left">
        <div className="image-left">
          {console.log(imageLinks.thumbnail)}
          <img src={imageLinks?.thumbnail} alt={title} />
        </div>
        <div className="details-left">
          <h4 className="secondary-heading">Book Details</h4>
          <p>
            <em>Publisher:- </em> {publisher ? publisher : "NA"}
          </p>
          <p>
            <em>Published Date:- </em>
            {publishedDate}
          </p>
          <p>
            <em>Pages:- </em>
            {pageCount ? pageCount : "NA"}
          </p>
          <p></p>
        </div>
      </div>
      <div className="right">
        <div className="heading-right">
          <h1 className="primary-heading">{title}</h1>
          {authors && authors.length > 0 && (
            <div className="right-authors">
              <p>By</p>
              {authors.map((el) => (
                <p>{el}</p>
              ))}
            </div>
          )}
        </div>
        <div className="description-right">
          <p>{description}</p>
        </div>
        <a href={previewLink} target="_blank" rel="noreferrer" className="button-right">
          Read More {">"}
        </a>
      </div>
    </div>
  );
};

export default BookDetail;
