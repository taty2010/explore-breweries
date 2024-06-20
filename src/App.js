import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callItem } from "./Redux/BreweriesList/Reducer";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Search from "./Components/Search";
import About from "./Components/About";
import StatesList from "./StatesList";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  const [findState, setFindState] = useState();
  const { breweries } = useSelector((state) => state.BreweriesSearch);

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route
            path="/states/*"
            element={
                <StatesList
                  findState={findState}
                  breweries={breweries}
                  setFindState={setFindState}
                />
            }
          />
          <Route
            path="/search"
            element={<Search />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
