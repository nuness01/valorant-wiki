import React from "react";
import "../../styles/Search.css";

import AppLevelContext from "../../services/AppLevelContext";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";

const Search = ({ placeholder }) => {
  const { agents, maps, weapons } = useContext(AppLevelContext);

  const [search, setSearch] = useState("");

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="data">
        <div className="dataResult">
          {weapons
            .filter((value) => {
              return search.toLowerCase() === ""
                ? value
                : value.displayName.toLowerCase().includes(search);
            })
            .map((value) => {
              return (
                <div>
                  <Link className="dataItem" to={"/weapons"}>
                    <p>{value.displayName}</p>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="dataResult">
          {agents
            .filter((value) => {
              return search.toLowerCase() === ""
                ? value
                : value.displayName.toLowerCase().includes(search);
            })
            .map((value) => {
              return (
                <div>
                  <Link className="dataItem" to={"/agents"}>
                    <p>{value.displayName}</p>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="dataResult">
          {maps
            .filter((value) => {
              return search.toLowerCase() === ""
                ? value
                : value.displayName.toLowerCase().includes(search);
            })
            .map((value) => {
              return (
                <div>
                  <Link className="dataItem" to={"/maps"}>
                    <p>{value.displayName}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
