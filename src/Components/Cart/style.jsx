import styled from "styled-components";
import devices from "../../Devices";



export const CartMain = styled.div`
  @media ${devices.mobileSS} {
    position: fixed;
    top: 40px;
    left: 10vw;
    background: #f5f5f5;
    width: 80vw;
    height: 140vw;
    box-shadow: 0 0 40px #373737;
    border-radius: 10px;
    font-family: Inter;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
  @media ${devices.tablet} {
    position: fixed;
    top: 7vw;
    left: auto;
    right: 6.5vw;
    width: 20vw;
    height: 35vw;
    font-family: Inter;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
`;

export const CartTitle = styled.p`
  @media ${devices.mobileSS} {
    background-color: #27ae60;
    text-align: center;
    color: white;
    padding: 8% 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media ${devices.tablet} {
    background-color: #27ae60;
    text-align: center;
    color: white;
    padding: 8% 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
  }
`;

export const CartProducts = styled.div`
  @media ${devices.mobileSS} {
    height: 85%;
  }
  @media ${devices.tablet} {
    background: #f5f5f5;
    width: 100%;
    height: 30vw;
    border-radius: 10px;
  }
`;

export const CartTotalSale = styled.p`
  @media ${devices.mobileSS} {
  }
  @media ${devices.tablet} {
  }
`;

export const CartRemoveAll = styled.button`
  @media ${devices.mobileSS} {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 3vw;
    margin: 4%;
    width: 92%;
    font-family: Inter;
    font-weight: 600;
  }
  @media ${devices.tablet} {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 1%;
    margin: 0 5%;
    width: 92%;
    font-family: Inter;
    font-weight: 600;
    font-size: 1.2vw;
    &:hover {
      background: #828282;
      cursor: pointer;
    }
  }
  @media ${devices.laptop} {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 1%;
    margin: 0 5%;
    width: 92%;
    font-family: Inter;
    font-weight: 600;
    font-size: 1.4vw;
    &:hover {
      background: #828282;
      cursor: pointer;
    }
  }
  &:active {
    box-shadow: 0 0 20px black;
  }
`;

export const CartTotalSaleDiv = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 4vw;
    font-family: Inter;
    font-weight: 600;
    border-top: 2px solid #e0e0e0;
    padding: 4vw 0;
  }
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5%;
    font-family: Inter;
    font-weight: 600;
    font-size: 1.2vw;
    border-top: 2px solid #e0e0e0;
    padding: 5% 0;
  }
  @media ${devices.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5%;
    font-family: Inter;
    font-weight: 600;
    border-top: 2px solid #e0e0e0;
    padding: 5% 0;
    font-size: 1.4vw;
  }
`;

export const CartTotalSaleText = styled.p`
  @media ${devices.mobileSS} {
  }
  @media ${devices.tablet} {
  }
`;
export const CartProductsDiv = styled.div`
  @media ${devices.mobileSS} {
    height: 72%;
    overflow-y: scroll;
  }
  @media ${devices.tablet} {
    height: 75%;
    overflow-y: scroll;
  }
`;
