import React, { useState, useEffect } from "react"
import { ProductsContainer } from "./styles"
import { Datatable } from "../../Components"
import api from "../../Services/api"
const columns = [{description:"Nome", key: "name"}, {description:"Descrição", key: "description"}, { description: "Preço", key: "price" }];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    const getProducts = async () => {
        const response = await api.get("products?page="+page);
        setProducts(response.data.data)
        setTotalPages(response.data.meta.pagination.pages)
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    useEffect(() => {
        setPage(1);
    }, [])

    useEffect(() => {
        getProducts()
    }, [page])

    return (
        <ProductsContainer>
            <Datatable actionSelectPage={(pageSelected: number) => setPage(pageSelected)} totalPages={totalPages} actionNext={nextPage} actionPrev={prevPage} actualPage={page} key={"datatable-products"} title={"Produtos"} data={products} columns={columns} ></Datatable>
        </ProductsContainer>
    )
}

export default Products;