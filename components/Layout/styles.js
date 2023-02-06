import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: max-content auto max-content;
  min-height: 100vh;
  width: 100vw;
`
export const TopBar = styled.div`
  height: 60px;
`
export const Content = styled.div`
  background-color: var(--black);
`

export const BottomBar = styled.div`
  height: 60px;
  background-color: var(--complementary-07-color);
`
