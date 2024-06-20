import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Brewery from "./Components/Brewery";
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
  // let { state } = useParams();

  // const dispatch = useDispatch();
  const { breweriesState } = useSelector((state) => state.States);

  return (
    <ListWrapper>
      {breweriesState.map((list) => (
        <Brewery key={list.id} list={list} />
      ))}
    </ListWrapper>
  );
};

export default StatePage;
