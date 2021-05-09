import { Grid } from "@material-ui/core"
import styled from "styled-components"

export const GridPanel = styled(Grid)`
    background: white;
    box-shadow: 60px -16px teal;
`

export const GridTitle = styled.h1``

export const DatatableHeader = styled(Grid).attrs({ container: true })`
    border: 1px solid #dddddd;
    border-radius: 2px;
    background-color: #dddddd;
`

export const DatatableRow = styled(Grid).attrs({ container: true })`
    border: 1px solid #dddddd;
    border-radius: 2px;
    background-color: white;
`

export const DatatableContainer = styled(Grid).attrs({ container: true })`
    padding: 20px;
    border: 1px solid #dddddd;
    border-radius: 2px;
    background-color: white;
`

export const DatatableItem = styled(Grid).attrs({ item: true })`
    padding: 10px;
    font-size: 12px;
`