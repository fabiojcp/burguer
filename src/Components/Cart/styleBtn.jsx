import styled from "styled-components"
import devices from "../../Devices"

export const OpenCart = styled.button`
@media ${devices.mobileSS} {
    background-image: url(${(props) => (props.CartIco)});
    background-position: center;
    background-repeat: no-repeat;
    background-size:60%;
    position: fixed;
    bottom: 10vw;
    right: 10vw;
    width: 10vw;
    height: 10vw;
    background-color: #27AE60;
    border-radius: 100%;
    border: 0 solid transparent;
}
`
export const CloseCart = styled.button`
@media ${devices.mobileSS} {
    background-image: url(${(props) => (props.Close)});
    background-position: center;
    background-repeat: no-repeat;
    background-size:60%;
    position: absolute;
    top: 2vw;
    right: 2vw;
    border-radius: 100%;
    height: 7vw;
    width: 7vw;
    background-color: #27AE60;
    border: 0 solid transparent;
}
`