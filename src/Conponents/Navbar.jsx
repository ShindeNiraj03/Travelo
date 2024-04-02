import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/oceanlogo2.png";
import logo1 from "../assets/bow.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <Nav>
        <div className="brand">
       
          <div className="container">
           
            {/* <SmokeText> */}
            <img src={logo} alt="" />
            {/* </SmokeText> */}
            {/* <img src={logo1} alt="" /> */}
            {/* <div className="text"><span1>a</span1>ves</div> */}
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#booking">Book Tour</a>
          </li>
        </ul>
      
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#booking" onClick={() => setNavbarState(false)}>
              Booking
            </a>
          </li>
        </ul>
        <div className="account-info" />
        <div className="account">My Account</div>
      </ResponsiveNav>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items:center;
  justify-contents:sapce-between;
  background-color:;
  height: 100px;

  .brand {
    padding:20%;
    margin-top:10px;
    align-items:;
    .container {
      margin-bottom:15%;
      cursor: pointer;
      display: flex;
      
      gap: 0.4rem;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform:;
      color:black;
    }
    .toggle {
      display: none;
    }
    span1{
      font-size:3rem;
      color:black;
    }
    span2{
      color:red;
    }
    span3{
      color:green;
    }
    span4{
      color:blue;
    }
    img {
      padding-left:0px;
      margin-top:15px;
      width: 130px;
      height: 80px;
      border-radius: 0%;
      color: white;
    }
  }

  ul {
    justify-contents:space-evenly;
    display: flex;
    gap: 2rem;
    list-style-type: circle;
    li {
      a {
        text-decoration: none;
        color:#1b8085;
        font-weight:bold;
        font-size: 1.1rem;
        transition: 0.2s ease-in-out;
        &:hover {
          
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "70px" : "-400px")};
  background-color: #0c343d;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 50%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #d9ead3;
        font-size: 1.2rem;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #f76c6c;
        }
      }

      &:first-of-type {
        a {
          font-weight: 900;
        }
      }
    }
  }
`;

// const smokeAnimation = keyframes`
//   0% { opacity: 0.2; transform: translateY(0); }
//   25% { opacity: 0.6; transform: translateY(-5px); }
//   50% { opacity: 0.2; transform: translateY(0); }
//   75% { opacity: 0.6; transform: translateY(-5px); }
//   100% { opacity: 0.2; transform: translateY(0); }
// `;

// const SmokeText = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-transform: ;
//   position: relative;
//   animation: ${smokeAnimation} 4s infinite ease-in-out;

//   span {
//     font-size: 2rem;
//     color: red;
//   }
// `;

// ... (Remaining code remains unchanged)
