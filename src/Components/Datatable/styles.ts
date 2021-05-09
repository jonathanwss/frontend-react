import { Grid } from "@material-ui/core"
import styled from "styled-components"

export const GridPanel = styled(Grid)`
    background: white;
    box-shadow: 60px -16px teal;
`

export const GridTitle = styled.h1`
    color: #494949;
    font-weight: 600;
    font-size: 18px;
    font-family: "Open Sans";
`


export const DatatableHeader = styled(Grid).attrs({ container: true })`
    border: 1px solid #F0EFEF;
    border-radius: 3px 3px 0px 0px;
    background-color: #F0EFEF;
    color: #545454;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: bold;
    font-stretch: normal;
    font-family: "Open Sans";
    font-size: 14px;
`

export const DatatableRow = styled(Grid).attrs({ container: true })`
    border: 1px solid #F0EFEF;
    border-radius: 2px;
    background-color: white;
    color: #2B2B2B;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-family: "Open Sans";
`

export const DatatableContainer = styled(Grid).attrs({ container: true })`
    padding: 20px;
    border: 1px solid #F0EFEF;
    border-radius: 2px;
    background-color: white;
`

export const DatatableItem = styled(Grid).attrs({ item: true })`
    padding: 10px;
    font-size: 14px;
`

export const Page = styled.span`
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    color: #2B2B2B;
    cursor: pointer;
`

export const PageSelected = styled(Page)`
    border-color: #A3A3A3;
    border: solid 2px;
    border-radius: 3px;
`