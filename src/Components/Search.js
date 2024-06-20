import React, { useEffect, useState } from "react";
import BrewList from "./list";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState(undefined);
  const [searchResult, setSearchResults] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/search?query=${search}&per_page=10`)
      .then((res) => {
        setSearchResults(res)
        setSuccess(true);
      })
      .catch((err) => console.log(err))
  }, [search]);

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div class="search-wrapper">
        <h1>SEARCH</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChanges}
          />
        </form>
        {!success ? (
          <div className="loading">
            <i class="fas fa-beer" />
          </div>
        ) : (
          <div>
            <BrewList breweries={searchResult} />
            {/* <button onClick={props.addMore}>Show More</button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
