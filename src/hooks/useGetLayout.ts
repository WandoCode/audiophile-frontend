import { useState, useEffect } from 'react'
import hookStore from '../store/hookStore'
import urls from './config.json'
import dataLayout from './helpers/dataLayout'
import { DataLayout } from '../types/index'
import { useQuery } from 'react-query'

const env = process.env.NODE_ENV || 'development'
const baseURL = env !== 'development' ? urls.production : urls.dev

const useGetLayout = () => {
  const getLayoutDatas = async () => {
    try {
      const rep = await hookStore().fetchLayout(baseURL)

      const raw = rep.data.data.attributes

      const cleanDatas = dataLayout(raw, baseURL, env).getCleanDatas()

      return cleanDatas
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }
  // TODO: besoin du try/catch avec react query?
  return useQuery('layout', getLayoutDatas)
}

export { useGetLayout }
