import styled from 'styled-components'

export const Container = styled.article`
  display: grid;
  grid-template-rows: auto 60px;
  background-color: red;
`

export const ImagePoster = styled.img`
  grid-area: 1 / 1 / 3 / 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`

export const FavoriteButton = styled.button`
  grid-area: 2 / 1 / 3 / 2;
  justify-self: start;
  padding: 20px;
  background-color: var(--primary-color);
`

export const NextCat = styled.button`
  grid-area: 2 / 2 / 3 / 3;
  justify-self: end;
  padding: 20px;
  background-color: var(--primary-color);
`
