import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  /* margin-top: 5%; */
  height: 10vh;
  width: 50vw;
  /* position: unset; */
  align-items: center;
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  color: black;
  font-size: 4vw;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Link className="router_link" to="/">
        Home
      </Link>
      <P>/</P>
      {/* <Link className='router_link' to='/about'>About Us</Link> */}
      <Link className="router_link" to="/search">
        Search
      </Link>
      <P>/</P>
      <Link className="router_link" to="/states">
        States
      </Link>
    </Wrapper>
  );
};

export default Nav;
