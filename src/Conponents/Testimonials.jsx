import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/nlogo.png";
import avatarImage1 from "../assets/dlogo.png";
import logo from "../assets/Ocean2.png"
import avatarImage2 from "../assets/slogo.png";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          This trip was incredible, from day one our tour guide was amazing .. caring and very knowledgeable.. the actual your was also incredible.. thanks everyone who made possible this unforgettable experience!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Niraj Shinde</h4>
              <span>Thetale,Maharashtra.</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          This is our favorite travel agency. Except the long wait they have Outstanding customer services at reasonable prices. Thank you for easy booking with flights and hotels. Great deals, and honest services. Highly recommended to everyone.
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Divya Shinde</h4>
              <span>Nashik,Maharashtra.</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          We booked a trip to Paris last month, with <img src={logo} alt=""  height="20"width="20"/>  Rainbow and he was awesome. He handled our entire trip from flight, to rental car, to hotel to shows. It was so nice to pass that responsibility to somebody as competent and timely as Rainbow.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Sam Shinde</h4>
              <span>Pune,Maharashtra.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
