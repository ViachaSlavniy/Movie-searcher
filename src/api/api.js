import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.omdbapi.com'
})
const API_KEY = '8523cbb8';

export const moviesAPI = {
    getMovies(movieRequest, page = 1){
        if(page) {
            return instance.get(`/?i=tt3896198&apikey=${API_KEY}&s=${movieRequest}&page=${page}`)
            .then(resp => resp.data);
        }
    }
}