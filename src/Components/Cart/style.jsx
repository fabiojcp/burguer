import styled from "styled-components"
import devices from "../../Devices"

export const CartMain = styled.div`
@media ${devices.mobileSS} {
    position: fixed;
    top: 40px;
    left: 10vw;
    background-color: #ffffff;
    width: 80vw;
    height: 140vw;
    box-shadow: 0 0 40px #373737;
    border-radius: 10px;
    font-family: Inter;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`

export const CartTitle = styled.p`
@media ${devices.mobileSS} {
    background-color: #27AE60;
    text-align: center;
    color: white;
    padding: 8% 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
`

export const CartProducts = styled.div`
@media ${devices.mobileSS} {
    
}
`

export const CartTotalSale = styled.div`
@media ${devices.mobileSS} {
    
}
`

export const CartRemoveAll = styled.div`
@media ${devices.mobileSS} {
    
}
`