import React from "react";
import styled from "styled-components";
import { MdCleaningServices } from "react-icons/md";
import service1 from "../assets/new-price.gif";
import service2 from "../assets/housekeeping.gif";
import service3 from "../assets/payment.gif";
import service4 from "../assets/kayak.gif";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: " Best Prices",
      subTitle:
        "Embark on budget-friendly adventures with our affordable traveling options, making exploration accessible to everyone.",
    },
    {
      icon: service2,
      title: "Hygienic Stay ",
      subTitle:
      "Indulge in a hygienic stay with our meticulously maintained accommodations, ensuring a clean and safe environment for a worry-free experience.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color:white;
    border-radius:20%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
