// EmptyCart, EmptyCartTitle, EmptyCartSubTitle,
import styled from "styled-components"
import devices from "../../Devices"

export const EmptyCart = styled.div`
@media ${devices.mobileSS} {
    height: 80%;
    text-align: center;
    font-family: Inter;
}
`

export const EmptyCartTitle = styled.p`
@media ${devices.mobileSS} {
    font-weight: 700;
    font-size: 5vw;
    margin-bottom: 4vw;
}
`

export const EmptyCartSubTitle = styled.p`
@media ${devices.mobileSS} {
    font-weight: 400;
    color: #828282;
    font-size: 4vw;
}
`