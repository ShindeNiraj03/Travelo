import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/dwnn.PNG";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <div className="scrolltop">
               <IoIosArrowDropupCircle />
          </div>
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 1;
  bottom: 9rem;
  right: 1rem;
  img {
    height: 2rem;
  }
  scrolltop{
    height:20px;
  }
  
  border-radius: 20rem;
  background-color: transparent;
  padding:1rem;
`;
