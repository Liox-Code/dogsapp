import React, { useEffect, useState } from 'react'

// Components
import ImageCard from '../ui/ImageCard'

// Styles
import * as S from '../styles'

const index = () => {
  const [catImage, setCatImage] = useState(null)
  const getCats = async () => {
    const res = await fetch(' https://api.thecatapi.com/v1/images/search')
    const data = await res.json()
    if (res.status === 200) {
      setCatImage(data[0])
    } else {
      setCatImage(null)
    }
  }
  const setFavorite = async pictureId => {
    const res = await fetch(' https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: pictureId
      })
    })
    if (res.status === 200) {
      console.log('Saved as Favorite')
    } else {
      console.log('Error Saving Favorite')
    }
  }
  useEffect(() => {
    getCats()
  }, [])

  return (
    <S.Container>
      {catImage && (
        <ImageCard
          src={catImage.url}
          id={catImage.id}
          title="Imagen random de gato"
          onClick01={pictureId => {
            setFavorite(pictureId)
          }}
          onClick02={getCats}
        />
      )}
    </S.Container>
  )
}

export default index
