export const formatImgUrl = (baseURL: string, env: string) => {
  const format = (rawUrl: string) => {
    if (env === 'development') return baseURL + rawUrl
    else return rawUrl
  }

  return { format }
}
