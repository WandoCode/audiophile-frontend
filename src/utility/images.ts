import urls from '../store/config.json'

const env = process.env.NODE_ENV || 'development'
const baseURL = env !== 'development' ? urls.production : urls.dev

export const formatImgUrl = () => {
  const format = (rawUrl: string) => {
    if (env === 'development') return baseURL + rawUrl
    else return rawUrl
  }

  return { format }
}
