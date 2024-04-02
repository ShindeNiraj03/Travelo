

import React from "react";
import styled from "styled-components";

import videoFile from "../assets/mountain.mp4";
export default function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted!');
  };
  return (
    <Section id="hero">
      <div className="background">
        <video autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className="content">
      
    

        <div class="title">
          <p class="text-with-shadow">
            
            <h1><span>TRAVELI<span1>N</span1>G</span></h1>
            <h4> – it leaves you <span2>speechless</span2>, then turns you into a <span2>storyteller</span2></h4>
            </p>
            
        </div>

       
           
            
        

    
        
      
        
        
        <form className="tour-booking-form" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="container">
            <label htmlFor="people">Number of People</label>
            <input type="number" id="people" name="people" placeholder="" required />
          </div>
          <div className="container">
            <label htmlFor="people">Phone</label>
            <input type="number" id="people" name="people" placeholder="mob no" required />
          </div>
          <div className="container">
            <label htmlFor="people">Date to travel</label>
            <input type="date" id="people" name="people" placeholder="" required />
          </div>
          <button type="submit">Book Now</button>
        </form>
        </div>
      
    </Section>
  );
};



const Section = styled.section`
  position: relative;
  margin-top: 0rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    video {
      width: 100%;
      height:100%;
      filter: brightness(55%);
      
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: ;
    align-items: center;
    gap: 1rem;
    .title {
      padding-top:100px;
      color: white;
      h1 {

        font-size: 4rem;
        letter-spacing:2rem;
        text-decoration:none;
        span{
          color:white ;
        }
        span1{
          color:red;
          text-decoration:underline;
        }
        
      }
      
      h4{
        color:white;

        span2{
          color:yellow;
          text-transform:uppercase;
          text-decoration:underline;

        }
      }
    }
    .text-with-shadow {
      text-shadow: 10px 2px 4px rgba(55, 13, 35, 0.8);
    }
    .search {
      
      display: flex;
      background-color: transparent;
      margin-top:8%;
      padding: 1.2rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: white;
          font-weight:bold

        }
        input {
          background-color:#d3d3d3;
          border: none;
          margin:10%;
          border-radius:12px;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 1.3rem;
        border: none;
        color: black;
        background-color:#e3dac9;
        font-size: 1.1rem;
        text-transform:capitalized;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f4d0c6;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
  /* ... (existing code) */

.content {
  /* ... (existing code) */
  .tour-booking-form {
    margin-top: 7rem;
    margin-left:0%;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      label {
        font-size: 1.2rem;
        color: yellow;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        border: solid black;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        &[type="date"] {
          padding-left: 0.5rem;
        }
        &::placeholder {
          color: #333;
        }
        &:focus {
          outline: none;
          border: 2px solid #ff4500;
        }
      }
    }

    button {
      align-self: center;
      padding: 1rem 2rem;
      cursor: pointer;
      border-radius: 1.3rem;
      border: none;
      color: white;
      background-color: #47a4a5;
      font-size: 1.2rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #2e6e70;
      }
    }
  }
}

/* ... (existing code) */

  

  
`;
