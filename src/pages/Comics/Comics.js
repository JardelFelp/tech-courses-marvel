import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import ComicCard from '../../components/ComicCard/ComicCard'

import applyDefaultLayout from '../../layouts/DefaultLayout'

import { ComicGrid } from './styled'

import omitBy from 'lodash/omitBy'

const Comics = () => {
  const [comics, setComics] = useState()
  const [filters, setFilters] = useState({})

  const getComics = (params) => {
    api.get('/comics', { params }).then((response) => {
      setComics(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    getComics()
  }, [])

  const handleChangeFilters = (event) => {
    const { name, value } = event.target
    setFilters({ ...filters, [name]: value })
  }

  useEffect(() => {
    const params = omitBy(filters, item => !item)
    const timeoutId = setTimeout(() => getComics(params), 1000)
    return () => clearTimeout(timeoutId)
  }, [filters])

  if (!comics) {
    return (
      <div>
        <h5>Carregando...</h5>
      </div>
    )
  }

  return (
    <div>
      <h1>Comics</h1>
      <div>
        <input 
          name="titleStartsWith" 
          placeholder="Title start with..."
          onChange={ handleChangeFilters }
        />
        <input 
          name="startYear" 
          placeholder="Year..."
          onChange={ handleChangeFilters }
        />
      </div>
      <ComicGrid>
        { comics.data.results.map((comic, index) => {
          return (
            <ComicCard comic={comic} key={index} />
          )
        }) }
      </ComicGrid>
    </div>
  )
}

export default applyDefaultLayout(Comics)