import React, { useState, useEffect } from "react"
import { UsersContainer } from "./styles"
import { Datatable } from "../../Components"
import api from "../../Services/api"
const columns = [{description:"Nome", key: "name"}, {description:"E-mail", key: "email"}, { description: "Situação", key: "status" }];

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    const getPosts = async () => {
        const response = await api.get("users?page="+page);
        setUsers(response.data.data)
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
        getPosts()
    }, [page])

    return (
        <UsersContainer>
            <Datatable actionSelectPage={(pageSelected: number) => setPage(pageSelected)} totalPages={totalPages} actionNext={nextPage} actionPrev={prevPage} actualPage={page} key={"datatable-users"} title={"Usuários"} data={users} columns={columns} ></Datatable>
        </UsersContainer>
    )
}

export default Users;