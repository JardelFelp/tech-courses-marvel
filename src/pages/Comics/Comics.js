import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import ComicCard from '../../components/ComicCard/ComicCard'

import { ComicGrid } from './styled'

const Comics = () => {
  const [comics, setComics] = useState()

  const getComics = () => {
    api.get('/comics').then((response) => {
      setComics(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    getComics()
  }, [])

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

export default Comics