import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callState } from "./Redux/States/Reducer";

const Li = styled.li`
  padding: 2%;
  border-radius: 25px;
  width: 100%;
  margin: 2%;
  font-weight: bold;
  @media only screen and (max-width: 40px) {
    Link {
      font-size: 5vw;
    }
  }
`;

const List = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Li>
        <Link
          onClick={() => {
            dispatch(callState(props.state));
          }}
          to={{
            pathname: `/states/${props.state}`,
            state: props.state
          }}
        >
          {props.state}
        </Link>
      </Li>
    </div>
  );
};

export default List;
