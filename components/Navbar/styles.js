import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto max-content;
  justify-items: end;
  height: 100%;
  background-color: var(--complementary-07-color);
`

export const CloseButton = styled.button`
  height: 100%;
  padding: 0 20px;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: var(--white);
`

export const Navbar = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  display: grid;
  grid-auto-flow: rows;
  grid-auto-rows: 40px;
  width: 100%;
  z-index: 100;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--black);
  color: var(--primary-color);
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`
