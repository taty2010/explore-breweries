import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callItem } from "../Redux/BreweriesList/Reducer";
import BrewList from "./list";

function Search(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { breweries, isFetching } = useSelector(
    (state) => state.BreweriesSearch
  );
  useEffect(() => {
    dispatch(callItem(search));
  }, [dispatch]);

  const handleData = (e) => {
    e.preventDefault();
    dispatch(callItem(search));
  };

  const handleChanges = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div class="search-wrapper">
        <h1>SEARCH</h1>
        <form onSubmit={handleData}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChanges}
          />
        </form>
        {isFetching ? (
          <div className="loading">
            <i class="fas fa-beer" />
          </div>
        ) : (
          <div>
            <BrewList breweries={breweries} />
            {/* <button onClick={props.addMore}>Show More</button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
