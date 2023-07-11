import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_CLIENT_URL,
})

export const getBoardGameList = () => api.get(`/boardgame/list`)
export const getBoardGameById = id => api.get(`/boardgame/${id}`)
export const getBoardGameSearch = () => api.get(`/boardgame/search`)

const apis = {
    getBoardGameList,
    getBoardGameById,
    getBoardGameSearch
}

export default apis