import React, { useEffect, useState } from 'react'

// Components
import ImageCard from '../ui/ImageCard'

// Styles
import * as S from '../styles/favorites'

const index = () => {
  const [catImages, setCatImages] = useState(null)
  const getCats = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/favourites', {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
      }
    })
    const data = await res.json()
    if (res.status === 200) {
      setCatImages(data)
    } else {
      setCatImages(null)
    }
  }

  const unsetFavorite = async pictureId => {
    const res = await fetch(
      `https://api.thecatapi.com/v1/favourites/${pictureId}`,
      {
        method: 'DELETE',
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY
        }
      }
    )
    console.log(`https://api.thecatapi.com/v1/favourites/${pictureId}`)
    if (res.status === 200) {
      getCats()
      console.log('Delete Favorite')
    } else {
      console.log(res.json())
      console.log('Error Deleting Favorite')
    }
  }

  useEffect(() => {
    getCats()
  }, [])

  return (
    <S.Container>
      {catImages &&
        catImages.map(catImage => {
          const { image } = catImage
          console.log(catImage)
          return (
            <ImageCard
              key={catImage.id}
              src={image.url}
              id={catImage.id}
              title="Imagen random de gato"
              onClick01={pictureId => unsetFavorite(pictureId)}
              onClick02={null}
            />
          )
        })}
    </S.Container>
  )
}

export default index
