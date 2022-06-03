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
`;

export const ProductImg = styled.div`
@media ${devices.mobileSS} {
    background-color: #f5f5f5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    background-image: url(${({image}) => image});
    width: 100%;
    height: 40%;
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
`;

export const ProductCategory = styled.p`
@media ${devices.mobileSS} {
    color: #828282;
    font-weight: 400;
    margin-left: 10%;
    margin-top: 5%;
    font-size: 4vw;
}
`;

export const ProductPrice = styled.p`
@media ${devices.mobileSS} {
    color: #27AE60;
    margin-left: 10%;
    margin-top: 5%;
    font-weight: 600;
    font-size: 5vw;
}`;

export const ProductButton = styled.button`
@media ${devices.mobileSS} {
    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    color: #ffffff;
    margin-left: 10%;
    margin-top: 10%;
    font-family: Inter;
    padding: 2vw 4vw;
    font-size: 4vw;
}
&:active {
    box-shadow: 0 0 20px black;
}
`;
