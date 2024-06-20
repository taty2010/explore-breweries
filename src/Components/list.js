import React from "react";
import Brewery from "./Brewery";

import styled from "styled-components";
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: auto;
  width: 99vw;
  margin: 0 auto;
`;

const BrewList = ({breweries}) => {
  return (
    <ListWrapper>
      {breweries.data.map((list) => (
        <Brewery key={list.id} list={list} />
      ))}
    </ListWrapper>
  );
};

export default BrewList;
