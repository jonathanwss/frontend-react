import React from "react"
import { DatatableContainer, DatatableRow, DatatableHeader, DatatableItem, GridTitle, Page, PageSelected } from "./styles"

type Column = {
    key: string;
    description: string;
}

export type Props = {
    data: any[]
    columns: Column[];
    title: string;
    actualPage: number;
    totalPages: number;
    actionPrev: () => void;
    actionNext: () => void;
    actionSelectPage: (pageSelected: number) => void;
}

const getItemSize = (size: number) => {
    switch(size){
        case 2:
            return 6;
        case 3: 
            return 4;
        case 4:
            return 3;
        case 5:
        case 6:
            return 2;
        default:
            return 1
    }
}

const Datatable = ({ data, columns, title, actionPrev, actionNext, actionSelectPage, actualPage, totalPages }: Props) => {
    return (
        <DatatableContainer sm={12}>
            <GridTitle>{title}</GridTitle>
            <DatatableHeader>
                {
                    columns.map( (column, index) => {
                        return (
                            <DatatableItem key={index} sm={getItemSize(columns.length)}>
                                {column.description}
                            </DatatableItem>
                        )
                    })
                }
            </DatatableHeader>
            {
                data.map(( row, index ) => {
                    return (
                        <DatatableRow key={index}>
                            {columns.map((column, index) => {
                                return (
                                    <DatatableItem key={index} sm={getItemSize(columns.length)}>
                                        {row[column.key].length > 90 ? row[column.key].substring(0,90)+"..." : row[column.key]}
                                    </DatatableItem>
                                )
                            })}
                        </DatatableRow>
                    )
                })
            }
            <DatatableRow>
                <DatatableItem style={{ color: "#494949", fontSize: 13 }} sm={10}>
                    Exibindo {data.length} registros
                </DatatableItem>
                <DatatableItem style={{ color: "#494949", textAlign: "right" }} sm={2}>
                    <Page style={{ color: actualPage === 1 ? "#A3A3A3": "#2B2B2B" }} onClick={() => {
                        if(actualPage > 1){
                            actionPrev()
                        }
                        }}> { "<" }</Page>
                        {actualPage === totalPages - 1 && 
                            <Page onClick={() => actionSelectPage(actualPage-1)}>{actualPage -1}</Page>
                        }
                        {
                            actualPage === totalPages &&
                            <>
                                <Page onClick={() => actionSelectPage(actualPage-2)}>{actualPage -2}</Page>
                                <Page onClick={() => actionSelectPage(actualPage-1)}>{actualPage -1}</Page>
                            </>
                        }
                        <PageSelected onClick={() => actionSelectPage(actualPage)}>{actualPage}</PageSelected>
                        {
                            actualPage < totalPages &&
                            <Page onClick={() => actionSelectPage(actualPage+1)}>{actualPage +1}</Page>
                        }
                        
                        {
                            actualPage < totalPages -1 && 
                                <Page onClick={() => actionSelectPage(actualPage+2)}>{actualPage +2}</Page>
                        }
                    <Page style={{ color: actualPage === totalPages ? "#A3A3A3": "#2B2B2B" }} onClick={() => {
                        if(actualPage < totalPages){
                            actionNext()
                        }
                    }}> { ">" }</Page>
                </DatatableItem>
            </DatatableRow>
        </DatatableContainer>
    )
}

export default Datatable;