// EmptyCart, EmptyCartTitle, EmptyCartSubTitle,
import styled from "styled-components"
import devices from "../../Devices"

export const EmptyCart = styled.div`
@media ${devices.mobileSS} {
    height: 80%;
    text-align: center;
    font-family: Inter;
}
@media ${devices.tablet} {
    text-align: center;
    font-family: Inter;
    background: #F5F5F5;
    height:10vw;
    width: 100%;
    border-radius: 10px ;
}
`

export const EmptyCartTitle = styled.p`
@media ${devices.mobileSS} {
    font-weight: 700;
    font-size: 5vw;
    margin-bottom: 4vw;
}
@media ${devices.tablet} {
    font-weight: 700;
    font-size: 1.1vw;
    margin-bottom: 2vw;
    margin-top: 1vw;
}
`

export const EmptyCartSubTitle = styled.p`
@media ${devices.mobileSS} {
    font-weight: 400;
    color: #828282;
    font-size: 4vw;
}
@media ${devices.tablet} {
    font-weight: 400;
    color: #828282;
    font-size: 0.8vw;
}
`