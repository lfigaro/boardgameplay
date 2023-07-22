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

export const saveUser = user => api.post(`/user/save`, {
    params: {
        email: user.email,
        user: user.user,
        name: user.name,
        city: user.city,
        pass: user.pass
    }
});

export const checkUser = user => api.post(`/user/check`, {
    params: {
        usuario: user.user,
        senha: user.senha
    }
});

export const getMessages = msg => api.get(`/message/get`, {
    params: {
        user: msg.user,
        chatId: msg.chatId
    }
 });

 export const sendMessage = reply => api.post(`/message/send`, {
    params: {
        chatId: reply.chatId,
        user: reply.user,
        text: reply.text
    }
});


const apis = {
    getBoardGameList,
    getBoardGameDetail,
    getBoardGameSearch,

    saveUser,
    checkUser,

    getMessages,
    sendMessage
}

export default apis