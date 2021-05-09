import React, { useEffect, useState } from "react"
import { PostsContainer } from "./styles"
import { Datatable } from "../../Components"
import api from "../../Services/api"
const columns = [{description:"Titulo", key: "title"}, {description:"Conteúdo", key: "body"}];

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    const getPosts = async () => {
        const response = await api.get("posts?page="+page);
        setPosts(response.data.data)
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
        <PostsContainer>
            <Datatable actionSelectPage={(pageSelected: number) => setPage(pageSelected)} totalPages={totalPages} actionNext={nextPage} actionPrev={prevPage} actualPage={page} key={"datatable"} title={"Últimas postagens"} data={posts} columns={columns} ></Datatable>
        </PostsContainer>
    )
}

export default Posts;