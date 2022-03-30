import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

function Banner() {
  const history = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner_info">
        <h1>Get out and stretch out imaginations</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
          <Button onClick={() => history.push("/search")} variant="outlined">
            Explore Nearby
          </Button>
        </h5>
      </div>
    </div>
  );
}

export default Banner;
