import styled from "styled-components";
import devices from "../../Devices";

export const ProductsListMain = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    margin: 110px 2vw 0px 2vw;
    gap: 20px;
    font-size: 6vw;
  }
`;
export const ProductsProductBox = styled.div``;

export const ProductsDetails = styled.details`
  @media ${devices.mobileSS} {
    font-family: Inter;
    list-style-type: none;
    border: 2px solid #f5f5f5;
    border-radius: 10px;
  }
`;

export const ProductsSummary = styled.summary` @media ${devices.mobileSS} {
    font-family: Inter;
    list-style-type: none;
    margin-left: 7vw;
    margin-bottom: 10px;
  }

  `;