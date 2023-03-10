import React from "react";
import "../styles/Search.css";
import Search from "../components/Search/Search";

const Home = () => {
  return (
    <div className="App">
      <Search placeholder="Search..." />;
    </div>
  );
};

export default Home;
