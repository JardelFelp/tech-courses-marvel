import axios from 'axios'
import CryptoJs from 'crypto-js'

const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey = process.env.REACT_APP_PRIVATE_KEY

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
    ...request.params,
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  }

  return request
})

export default api