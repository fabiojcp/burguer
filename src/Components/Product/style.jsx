import styled from "styled-components";
import devices from "../../Devices";

export const ProductCard = styled.div`
  @media ${devices.mobileSS} {
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    margin: 0 15% 10px 15%;
    background-color: #ffffff;
    height: 80vw;
  }
  @media ${devices.tablet} {
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    background-color: #ffffff;
    margin: 0 1vw 2vw 0vw;
    width: 28%;
    height: fit-content;
    font-family: Inter;
  }
`;

export const ProductImg = styled.div`
  @media ${devices.mobileSS} {
    background-color: #f5f5f5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    background-image: url(${({ image }) => image});
    width: 100%;
    height: 40%;
  }
  @media ${devices.tablet} {
    background-color: #f5f5f5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    background-image: url(${({ image }) => image});
    width: 100%;
    height: 9vw;
  }
`;

export const ProductName = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 700;
    margin-left: 10%;
    margin-top: 10%;
    text-size-adjust: auto;
    font-size: 5vw;
    white-space: nowrap;
  }
  @media ${devices.tablet} {
    font-weight: 700;
    margin-left: 5%;
    margin-top: 10%;
    text-size-adjust: auto;
    font-size: 1.4vw;
    white-space: nowrap;
    max-width: 16ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      max-width: 100ch;
      overflow: visible;
      text-overflow: wrap;
      white-space: nowrap;
      z-index: 2;
    }
  }
`;

export const ProductCategory = styled.p`
  @media ${devices.mobileSS} {
    color: #828282;
    font-weight: 400;
    margin-left: 10%;
    margin-top: 5%;
    font-size: 4vw;
  }
  @media ${devices.tablet} {
    color: #828282;
    font-weight: 400;
    margin-left: 5%;
    margin-top: 5%;
    font-size: 1.2vw;
  }
`;

export const ProductPrice = styled.p`
  @media ${devices.mobileSS} {
    color: #27ae60;
    margin-left: 10%;
    margin-top: 5%;
    font-weight: 600;
    font-size: 5vw;
  }
  @media ${devices.tablet} {
    color: #27ae60;
    margin-left: 5%;
    margin-top: 5%;
    font-weight: 600;
    font-size: 1.2vw;
  }
`;

export const ProductButton = styled.button`
  @media ${devices.mobileSS} {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: #ffffff;
    margin-left: 10%;
    margin-top: 10%;
    font-family: Inter;
    padding: 2vw 4vw;
    font-size: 4vw;
  }
  @media ${devices.tablet} {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: #ffffff;
    margin-left: 5%;
    margin: 6% 0 6% 5%;
    font-family: Inter;
    padding: 1vw 2vw;
    font-size: 1vw;
    &:hover {
      background: #93d7af;
      border: 2px solid #93d7af;
      cursor: pointer;
    }
  }
  &:active {
    box-shadow: 0 0 20px black;
  }
`;
