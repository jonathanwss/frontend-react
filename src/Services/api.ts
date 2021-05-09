import Axios from "axios"

const api = Axios.create({baseURL:"https://gorest.co.in/public-api/"})

export default api;