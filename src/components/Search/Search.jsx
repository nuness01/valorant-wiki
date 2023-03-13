import React from "react";
import "../../styles/Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(input);
  };

  return (
    <div className="search">
      <div className="searchInput">
        <div>
          <h2>Search the 3 topics above</h2>
        </div>
        <br></br>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Search..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
