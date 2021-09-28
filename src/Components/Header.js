import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Title = styled.div`
  width: 100%;
  color: black;
  mix-blend-mode: screen;
  background-color: white;
  font-size: 18vw;
  /* line-height: 24vh; */
  margin: 0 auto;
  font-family: "Permanent Marker", cursive;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 52px;
  border-bottom-right-radius: 52px;
  i {
    font-size: 5vw;
  }
  h2 {
    font-size: 12vw;
  }
`;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [offset, setOffset] = useState(0);

  window.onscroll = function () {
    const position = window.scrollY;
    setOffset(position);
    scroll();
  };

  const scroll = () => {
    if (offset > 400) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className="header">
      <Title className="title-nav">
        <h2>Explore Breweries</h2>
        <Nav />
      </Title>
    </div>
  );
};

export default Header;
