import React from "react"
import { DatatableContainer, DatatableRow, DatatableHeader, DatatableItem, GridTitle } from "./styles"

type Column = {
    key: string;
    description: string;
}

export type Props = {
    data: any[]
    columns: Column[];
    title: string;
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

const Datatable = ({ data, columns, title }: Props) => {
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
                                        {row[column.key]}
                                    </DatatableItem>
                                )
                            })}
                        </DatatableRow>
                    )
                })
            }
            <DatatableRow>
                <DatatableItem sm={10}>
                    Exibindo X postagens
                </DatatableItem>
                <DatatableItem style={{ textAlign: "right" }} sm={2}>
                    {"< 1 2 3 >"}
                </DatatableItem>
            </DatatableRow>
        </DatatableContainer>
    )
}

export default Datatable;