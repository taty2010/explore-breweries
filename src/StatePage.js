import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Brewery from "./Components/Brewery";
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  flex-basis: 70%;
  margin: 0 auto;
  overflow-y: scroll;
  backdrop-filter: blur(14px);
  background: #00000059;
  mix-blend-mode: screen;
`;

const StatePage = (props, { match, routeprops }) => {
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
