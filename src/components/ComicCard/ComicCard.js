import React from 'react'

import { ComicThumbnail } from './styled'

const ComicCard = (props) => {
  const comic = props.comic

  return (
    <div>
      <ComicThumbnail src={
        comic.thumbnail.path +
        '.' +
        comic.thumbnail.extension
      } alt={ comic.title } />
      <h5>{ comic.title }</h5>
      <p>{ comic.description }</p>
    </div>
  )
}

export default ComicCard