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
          {agents
            .filter((agent) => {
              return search.toLowerCase() === ""
                ? agent
                : agent.displayName.toLowerCase().includes(search);
            })
            .map((agents) => {
              return (
                <div>
                  <Link className="dataItem" to={"/agents"}>
                    <p>{agents.displayName}</p>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="dataResult">
          {maps
            .filter((agent) => {
              return search.toLowerCase() === ""
                ? agent
                : agent.displayName.toLowerCase().includes(search);
            })
            .map((maps) => {
              return (
                <div>
                  <Link className="dataItem" to={"/maps"}>
                    <p>{maps.displayName}</p>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="dataResult">
          {weapons
            .filter((agent) => {
              return search.toLowerCase() === ""
                ? agent
                : agent.displayName.toLowerCase().includes(search);
            })
            .map((weapons) => {
              return (
                <div>
                  <Link className="dataItem" to={"/weapons"}>
                    <p>{weapons.displayName}</p>
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
