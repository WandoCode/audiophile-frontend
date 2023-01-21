import { useState, useEffect } from 'react'
import urls from './config.json'
import dataItem from './helpers/dataItem'
import hookStore from '../store/hookStore'
import { DataItem } from '../types/index'
import { useQuery } from 'react-query'

interface Props {
  slug?: string
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env !== 'development' ? urls.production : urls.dev

function useGetItem({ slug }: Props) {
  const getItem = async () => {
    try {
      const rep = await hookStore().fetchItem(baseURL, slug || '')

      const raw = rep.data.data.attributes

      const structuredDatas = dataItem(raw, baseURL, env).getCleanDatas()

      return structuredDatas
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }

  return useQuery('Items', getItem)
}

export default useGetItem
