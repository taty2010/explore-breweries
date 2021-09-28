import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callItem } from "./Redux/BreweriesList/Reducer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./Components/Search";
import About from "./Components/About";
import StatesList from "./StatesList";
import Footer from "./Components/Footer";
import "./App.scss";

function App(props) {
  const [search, setSearch] = useState("Texas");
  const [findState, setFindState] = useState();
  const dispatch = useDispatch();
  const { breweries } = useSelector((state) => state.BreweriesSearch);

  const handleData = (e) => {
    e.preventDefault();
    dispatch(callItem(search));
    // props.callItem(search);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          path="/states"
          render={(routeprops) => {
            return (
              <StatesList
                {...routeprops}
                findState={findState}
                breweries={breweries}
                setFindState={setFindState}
              />
            );
          }}
        />
        <Route
          path="/search"
          component={Search}
          handleData={handleData}
          search={search}
          setSearch={setSearch}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
