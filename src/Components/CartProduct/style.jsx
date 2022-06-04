//  CartProductCategory, CartProductBtnRemove
import devices from "../../Devices";
import styled from "styled-components";

export const CartProductMain = styled.div`
  @media ${devices.mobileSS} {
    margin: 0 4vw;
    height: 20%;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    padding: 4vw 0;
    font-family: Inter;
  }
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    margin: 1vw 5%;
    font-family: Inter;
    height: 20%;
  }
`;

export const CartProductImage = styled.div`
  @media ${devices.mobileSS} {
    background: #e0e0e0;
    border-radius: 5px;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 22%;
  }
  @media ${devices.tablet} {
    background: #e0e0e0;
    border-radius: 5px;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 22%;
  }
`;

export const CartProductTexts = styled.div`
  @media ${devices.mobileSS} {
    margin-left: 1vw;
    width: 50%;
  }
  @media ${devices.tablet} {
    width: 50%;
    margin-left: 0.5vw;
  }
`;

export const CartProductName = styled.p`
  @media ${devices.mobileSS} {
    font-weight: 700;
    font-size: 3.5vw;
    max-width: 14ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1.5vw 0;
  }
  @media ${devices.tablet} {
    font-weight: 700;
    font-size: 1vw;
    max-width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 0.5vw 0;
    width: 95%;
    &:hover {
      max-width: 100ch;
      overflow: unset;
      text-overflow: unset;
      white-space: unset;
      background-color: #f5f5f5;
      z-index: 2;
    }
  }
`;

export const CartProductCategory = styled.p`
  @media ${devices.mobileSS} {
    color: #828282;
    font-weight: 400;
    font-size: 3.8vw;
    margin: 0 0 1.5vw 0;
  }
  @media ${devices.tablet} {
    color: #828282;
    font-weight: 400;
    font-size: 0.8vw;
    margin: 0 0 0.5vw 0;
  }
`;

export const CartProductBtnRemove = styled.button`
  @media ${devices.mobileSS} {
    color: #bdbdbd;
    border: 0 solid transparent;
    background-color: transparent;
    padding: 0;
    height: 25%;
    width: 10%;
    font-weight: 500;
    font-family: Inter;
  }
  @media ${devices.tablet} {
    color: #bdbdbd;
    border: 0 solid transparent;
    background-color: transparent;
    padding: 0;
    height: 25%;
    font-weight: 500;
    font-family: Inter;
    font-size: 0.9vw;
    &:hover {
      color: #828282;
      cursor: pointer;
    }
  }
`;

export const CartProductAmount = styled.p`
  @media ${devices.mobileSS} {
    color: #828282;
    font-weight: 400;
    font-size: 3.8vw;
  }
  @media ${devices.tablet} {
    color: #828282;
    font-weight: 400;
    font-size: 0.8vw;
  }
`
