import styled from "styled-components";
import devices from "../../Devices";

export const ProductsListMain = styled.div`
@media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    margin-top: 110px;
    margin-left: 20vw;
}
`

export const Product = styled.div