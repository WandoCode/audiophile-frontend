import { useState, useEffect } from 'react'
import { hookStore } from '../store'
import urls from './config.json'
import { dataItem, DataItem } from './helpers/dataItem'

interface Props {
  slug: string
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

async function getItem({ slug }: Props): Promise<{
  datasItem: DataItem | undefined
}> {
  try {
    const rep = await hookStore().fetchItem(baseURL, slug)

    const raw = rep.data.data.attributes

    const structuredDatas = dataItem(raw, baseURL, env).getCleanDatas()

    return { datasItem: structuredDatas }
  } catch (error) {
    throw error // TODO:Afficher une page d'erreur
  }
}

export { getItem }
