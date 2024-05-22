import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap styles

export const Filter = ({ show, onClose, onApply, isSeriesActive }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleApply = () => {
    onApply(selectedGenre, selectedCategory, fromDate, toDate);
    onClose();
  };

  if (!show) {
    return null;
  }

  const movieGenres = [
    { value: "", label: "Choose a Genre" },
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "fantasy", label: "Fantasy" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "music", label: "Music" },
    { value: "mystery", label: "Mystery" },
    { value: "romance", label: "Romance" },
    { value: "science fiction", label: "Science Fiction" },
    { value: "tv movie", label: "TV Movie" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "western", label: "Western" },
  ];

  const seriesGenres = [
    { value: "", label: "Choose a Genre" },
    { value: "actionAdventure", label: "Action & Adventure" },
    { value: "animation", label: "Animation" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "kids", label: "Kids" },
    { value: "mystery", label: "Mystery" },
    { value: "news", label: "News" },
    { value: "reality", label: "Reality" },
    { value: "scifiFantasy", label: "Sci-Fi & Fantasy" },
    { value: "soap", label: "Soap" },
    { value: "talk", label: "Talk" },
    { value: "warPolitics", label: "War & Politics" },
    { value: "western", label: "Western" },
  ];

  const categories = [
    { value: "", label: "Choose a Category" },
    { value: "topRated", label: "Top Rated" },
    { value: "popular", label: "Popular" },
    { value: "trending", label: "Trending" },
  ];

  const genres = isSeriesActive ? seriesGenres : movieGenres;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{}}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 style={{ marginBottom: "25px" }}>Filter By Date</h2>
        <div className="date-filter">
          <div className="date-input">
            <label>From:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="date-input" style={{ gap: "27px" }}>
            <label>To:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className="genreContent">
          <h2 className="genreHeader">Filter By Genre</h2>
          <div className="genreForm">
            <select
              className="genreBar form-select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="categoryContent">
          <h2 className="categoryHeader">Filter By Category</h2>
          <div className="categoryForm">
            <select
              className="categoryBar form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="apply-button btn btn-primary"
          style={{ marginTop: "25px" }}
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
