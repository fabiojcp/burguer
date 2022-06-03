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
    z-index: 1;
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
    height: 85%;
}
`

export const CartTotalSale = styled.p`
@media ${devices.mobileSS} {
    
}
`

export const CartRemoveAll = styled.button`
@media ${devices.mobileSS} {
    background: #E0E0E0;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    padding: 3vw;
    margin: 4%;
    width: 92%;
    font-family: Inter;
    font-weight: 600;
}
&:active {
    box-shadow: 0 0 20px black;
}
`

  export const CartTotalSaleDiv = styled.div`
@media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 4vw;
    font-family: Inter;
    font-weight: 600;
    border-top: 2px solid #E0E0E0;
    padding: 4vw 0;
}
`

export const CartTotalSaleText = styled.p`
@media ${devices.mobileSS} {
    
}
`
export const CartProductsDiv = styled.div`
@media ${devices.mobileSS} {
    height: 72%;
    overflow-y: scroll;
}
`