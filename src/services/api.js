import axios from 'axios'
import CryptoJs from 'crypto-js'

const publicKey = '5cb12b1a3835f9e0327000e205df90ec'
const privateKey = 'a66a287bac8b7a6749830ee33ce3a4a2ce9d9ed0'

const timestamp = new Date().getTime()

/**
 * Cria um hash combinando timestamp e as chaves
 */
const hash = CryptoJs.MD5(
  timestamp +
  privateKey +
  publicKey
).toString()

/**
 * Cria instância do Axios
 */
const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

/**
 * Adiciona os parâmetros obrigatórios
 * para realizar requisições na API Marvel
 */
api.interceptors.request.use(request => {
  request.params = {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  }

  return request
})

export default api