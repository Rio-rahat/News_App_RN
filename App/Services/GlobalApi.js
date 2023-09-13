import { create } from 'apisauce'

const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apiKey = "?country=us&apiKey=5847a8bd8b584eafa1fb8278cff3bc00"
const getTopHeadlines = api.get("/top-headlines" + apiKey);
const getByCategory = (category)=> api.get('/everything?q='+category+'&apiKey=5847a8bd8b584eafa1fb8278cff3bc00')

export default {
  getTopHeadlines
}


// https://newsapi.org/v2/top-headlines?country=us&apiKey=5847a8bd8b584eafa1fb8278cff3bc00