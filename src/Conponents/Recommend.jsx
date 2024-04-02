import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/singapore.png";
import Destination2 from "../assets/thailand.png";
import Destination3 from "../assets/paris.png";
import Destination4 from "../assets/newzealand.png";
import Destination5 from "../assets/bora-bora-beach.png";
import Destination6 from "../assets/london.png";
import info1 from "../assets/airplane.gif";
import info2 from "../assets/hotel.gif";
import info3 from "../assets/vegan-food.gif";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "A modern city-state in Southeast Asia, synonymous with futuristic architecture, lush gardens, diverse cuisine, and a bustling cosmopolitan atmosphere.",
      cost: "38,800",
      distance:"6330 km",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "A captivating Southeast Asian destination known for its vibrant street life, ornate temples, tropical beaches, and warm hospitality.",
      cost: "54,200",
      distance:"4662 km",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "The romantic capital of France, celebrated for its timeless art, iconic landmarks like the Eiffel Tower, and a charming blend of culture, cuisine, and history.",
      cost: "45,500",
      distance:"7003 km",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: " A pristine island nation renowned for its breathtaking landscapes, friendly locals, and a unique blend of Maori and European cultures.",
      cost: "24,100",
      distance:"12358 km",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "A tropical paradise in French Polynesia, known for its crystal-clear turquoise waters, overwater bungalows, and stunning coral reefs.",
      cost: "95,400",
      distance:"6330 km",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "The vibrant capital of the United Kingdom, steeped in rich history, iconic landmarks such as Big Ben and the Tower Bridge, and a diverse cultural tapestry.",
      cost: "38,800",
      distance:"7186 km",
      duration: "Approx 3 night 2 day trip",
    },
  ];

 

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <h5>{destination.distance}</h5>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding:  1 rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
      }
      img {
        
        width: 95%;
        height:45%;
        border-radius:20px;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: white;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
