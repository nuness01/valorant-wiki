import React, { useContext } from "react";
import "../../styles/Search.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppLevelContext from "../../services/AppLevelContext";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const { agents } = useContext(AppLevelContext);

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
          

          <div>
            {agents.length > 0 ? (
              <div>
                
                <div>
                  <h2 className="title_h2">Choose one agent</h2>
                </div>
                {agents.map((agents) => (
                  <div key={agents.displayName}>
                    <Link to={`/agents/${agents.uuid}`} className="link">
                      <p>{agents.displayName}</p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
