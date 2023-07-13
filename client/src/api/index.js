import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_CLIENT_URL,
})

export const getBoardGameList = () => api.get(`/boardgame/list`)

export const getBoardGameDetail = bgId => api.get(`/boardgame/search`, {
    params: {
        bgId: bgId
    }
 });

export const getBoardGameSearch = searchTerm => api.get(`/boardgame/search`, {
    params: {
        searchTerm: searchTerm
    }
 });

const apis = {
    getBoardGameList,
    getBoardGameDetail,
    getBoardGameSearch
}

export default apis