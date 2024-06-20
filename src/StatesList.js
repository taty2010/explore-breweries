import React, { useEffect, useState } from "react";
import States from "states-us";
import styled from "styled-components";
import List from "./List";
import { Route, useLocation, Routes } from "react-router-dom";
import StatePage from "./StatePage";
import { useSelector, useDispatch } from "react-redux";
import { callState } from "./Redux/States/Reducer";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 auto;
  width: 95%;
  margin: 2% 0;
  position: relative;
  justify-content: center;
`;

const UL = styled.ul`
  display: flex;
  flex-flow: column;
  overflow: scroll;
  flex-basis: 20%;
  overflow-x: hidden;
  height: 500px;
  position: sticky;
  top: 92px;
  left: 0;
  backdrop-filter: blur(14px);
  /* background: #f4f5f61f; */
  mix-blend-mode: screen;
  border-radius: 11px;
  div h2 {
    color: white;
  }
  @media only screen and (max-width: 450px) {
    flex-basis: 0;
    /* height: 100vh;
    top: 0;
    flex-basis: 100%;
    z-index: 1; */
  }
`;

const Span = styled.span`
  position: fixed;
  left: 0;
  border-bottom: 2px solid;
  top: 22%;
  font-size: 6vw;
  color: white;
  z-index: 999;
  transform: rotate(90deg);
  @media only screen and (min-width: 450px) {
    display: none;
  }
`;

const StatesList = ({setFindState, breweries, findState}) => {
  let location = useLocation()
  const stateName = [];
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);

  const { isFetchingState } = useSelector(
    (state) => state.States
  );

  useEffect(() => {
    dispatch(callState(locations));
  }, []);
  States.forEach((state) => {
    stateName.push(state.name);
  });

  const locations = location.pathname.replaceAll("/states/", "");

  const toggle = () => {
    setSidebar(!sidebar);
  };
  return (
    <Wrapper>
      <UL className={`states_list ${sidebar ? `sidebar-open` : ``}`}>
        {stateName.map((state) => (
          <List
            key={state}
            setFindState={setFindState}
            findState={findState}
            state={state}
          />
        ))}
      </UL>
      <Span onClick={toggle} class="toggle-states">
        View States
      </Span>
      {location.pathname === "/states" ? (
        <div className="title-state-search">
          <h2>Select A State to find Breweries</h2>
        </div>
      ) : isFetchingState ? (
        <div className="title-state-search">
          <h2>Searching...</h2>
          <div className="loading">
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path=":state"
            element={<StatePage />}
          />
         </Routes>
      )}
    </Wrapper>
  );
};

export default StatesList;
