export const formatImgUrl = (baseURL: string, env: string) => {
  const format = (rawUrl: string) => {
    console.log(baseURL + rawUrl)

    if (env === 'development') return baseURL + rawUrl
    else return rawUrl
  }

  return { format }
}
