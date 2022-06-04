import devices from "../../Devices";
import styled from "styled-components";

export const HeaderMain = styled.div`
  @media ${devices.mobileSS} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f5f5f5;
  }
  @media ${devices.tablet} {
    height: 5vw;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
    background-color: #f5f5f5;
  }
`;
export const HeaderLogo = styled.img`
  @media ${devices.mobileSS} {
    width: 40vw;
    margin-left: 30vw;
  }
  @media ${devices.tablet} {
    width: 12vw;
  }
`;
export const HeaderForm = styled.form`
  @media ${devices.mobileSS} {
    display: flex;
    width: 95%;
    margin-left: 5%;
    align-items: center;
  }
  @media ${devices.tablet} {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderInput = styled.input`
  @media ${devices.mobileSS} {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 2vw 0px 3vw;
    width: 92%;
    height: 10vw;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: Inter;
    font-size: 4vw;
    &::placeholder {
    font-size: 3vw;
  }
  }

  @media ${devices.tablet} {
    padding: 0px 2vw 0px 1vw;
    width: 80%;
    height: 70%;
    font-size: 1.5vw;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: Inter;
    &::placeholder {
    font-size: 1vw;
  }
  }

  &::placeholder {
    color: #e0e0e0;
    font-family: Inter;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid #888888;
    box-shadow: 0 0 10vw #888888;
    outline: none;
  }
  -webkit-focus-ring-color: none;
`;

export const HeaderButton = styled.button`
  @media ${devices.mobileSS} {
    position: absolute;
    right: 12vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    flex: none;
    color: white;
    font-family: Inter;
    font-size: 3vw;
    padding: 1vw 2vw;
  }
  @media ${devices.tablet} {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: 6.8vw;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    font-size: 1vw;
    padding: 0.6vw 1vw;
    color: white;
    &:hover {
      background: #93D7AF;
      border: 2px solid #93D7AF;
      cursor: pointer;
    }
  }
  &:active {
    border: 2px solid #888888;
    box-shadow: 0 0 10vw #888888;
    outline: none;
  }
`;
