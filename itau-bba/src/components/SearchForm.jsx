import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.scss";
const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
