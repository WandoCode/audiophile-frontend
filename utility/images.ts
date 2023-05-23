import config from '../config.json'
const env = process.env.NODE_ENV || 'development'

const baseURLStrapi =
  env !== 'development' ? config.strapi.production : config.strapi.development

export const formatImgUrl = () => {
  const format = (rawUrl: string) => {
    // if (env === 'development') return baseURLStrapi + rawUrl
    // TODO: retirer la ligne suivante et remettre la précédente pour reconfigurer la route test
    if (env) return rawUrl
    else return rawUrl
  }

  return { format }
}
