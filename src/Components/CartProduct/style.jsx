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
`;

export const CartProductTexts = styled.div`
  @media ${devices.mobileSS} {
    margin-left: 1vw;
    width: 50%;
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
`;

export const CartProductCategory = styled.p`
  @media ${devices.mobileSS} {
    color: #828282;
    font-weight: 400;
    font-size: 3.8vw;
  }
`;

export const CartProductBtnRemove = styled.button`
  @media ${devices.mobileSS} {
    color: #BDBDBD;
    border: 0 solid transparent;
    background-color: transparent;
    padding: 0;
    height: 25%;
    width: 10%;
    font-weight: 500;
    font-family: Inter;
  }
`;
