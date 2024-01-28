import axios from "axios";

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_VsaWqpRNmoHeo4wjbGLLyNG3xhg3yxTT7HLfX88b&currencies=USD&base_currency=BRL
//fca_live_VsaWqpRNmoHeo4wjbGLLyNG3xhg3yxTT7HLfX88b
//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
const api = axios.create({
    baseURL: 'https://api.freecurrencyapi.com/v1/'
});

export default api;