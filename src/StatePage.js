import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Brewery from "./Components/Brewery";
import callState from "./Redux/States/Reducer";
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: auto;
  flex-basis: 80%;
  margin: 0 auto;
`;

const StatePage = (props, { match, routeprops }) => {
  // const paramItemId = props.match.params.state;
  // const [findState, setFindState] = useState(paramItemId);
  const dispatch = useDispatch();
  const { breweriesState } = useSelector((state) => state.States);
  const params = props.match;
  console.log(params.state);
  if (params) {
    console.log("HELLOOOO", params);
  }
  // useEffect(() => {
  // dispatch(callState(state));
  // }, []);
  return (
    <ListWrapper>
      {breweriesState.map((list) => (
        <Brewery key={list.id} list={list} />
      ))}
    </ListWrapper>
  );
};

export default StatePage;
