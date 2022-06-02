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
    height: 10vw;
  }
`;
export const HeaderLogo = styled.img`
  @media ${devices.mobileSS} {
    width: 40vw;
    margin-left: 30vw;
  }
  /*@media ${devices.mobileS} {
    width: 35vw;
    margin-left: 25vw;
  }

  @media ${devices.mobileM} {
    width: 28vw;
    margin-left: 22vw;
  }

  @media ${devices.mobileL} {
    width: 22vw;
    margin-left: 22vw;
  }*/

  @media ${devices.tablet} {
    width: 12vw;
    margin-left: 10vw;
  }
`;
export const HeaderForm = styled.form`
  @media ${devices.mobileSS} {
    display: flex;
    width: 95%;
    margin-left: 5%;
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
    width: 90%;
    height: 40px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: Inter;
    color: #828282;
    font-size: 4vw;
    &:focus {
      border: 2px solid #888888;
      box-shadow: 0 0 10vw #888888;
      outline: none;
    }
  }
  /*
  @media ${devices.mobileS} {
    padding: 0px 2vw 0px 3vw;
    width: 80%;
    height: 41px;
    font-size: 3.5vw;
  }

  @media ${devices.mobileM} {
    padding: 0px 2vw 0px 3vw;
    width: 70%;
    height: 41px;
    font-size: 3.5vw;
  }

  @media ${devices.mobileL} {
    padding: 0px 2vw 0px 3vw;
    width: 60%;
    height: 35px;
    font-size: 2.4vw;
  }

  @media ${devices.mobileLL} {
    padding: 0px 2vw 0px 3vw;
    width: 50%;
    height: 28px;
    font-size: 2.1vw;
  }*/

  @media ${devices.tablet} {
    padding: 0px 2vw 0px 3vw;
    width: 40%;
    height: 28px;
    font-size: 1.5vw;
  }
  -webkit-focus-ring-color: none;
`;

export const HeaderButton = styled.button`
  @media ${devices.mobileSS} {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 21px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    flex: none;
    color: white;
    font-family: Inter;
    font-size: 4vw;
    margin-left: 58vw;
    margin-top: 2.8vw;
  }
  &:active {
    border: 2px solid #888888;
    box-shadow: 0 0 10vw #888888;
    outline: none;
  }
  /*
  @media ${devices.mobileS} {
    width: 20%;
    height: 25px;
    font-size: 3vw;
    margin-left: 58%;
    margin-top: 2.3vw;
  }

  @media ${devices.mobileM} {
    width: 18vw;
    height: 25px;
    font-size: 3vw;
    margin-left: 50%;
    margin-top: 2vw;
  }

  @media ${devices.mobileL} {
    width: 14vw;
    height: 17px;
    font-size: 2.2vw;
    margin-left: 44%;
    margin-top: 1.6vw;
  }

  @media ${devices.mobileLL} {
    width: 12vw;
    height: 14px;
    font-size: 1.8vw;
    margin-left: 37%;
    margin-top: 1.6vw;
  }*/
`;
