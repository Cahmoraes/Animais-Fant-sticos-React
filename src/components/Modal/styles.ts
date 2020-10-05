import styled from 'styled-components'
import { animaModal } from '../../styles/keyframes'

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalDiv = styled.div`
  background: white;
  min-width: 300px;
  padding: 40px;
  border: 10px solid #FB5;
  box-shadow: 0 0 0 10px white;
  position: relative;
  animation: ${animaModal} .5s forwards;

  & label {
    font-family: 'IBM Plex Mono', monospace;
    display: block;
    font-weight: bold;
    margin: 1rem 0 .5rem 0;
  }  

  & input {
    width: 100%;
    padding: .7rem .5rem;
    box-sizing: border-box;
  }

  & button[type="submit"] {
    display: block;
    background: #E54;
    border: none;
    border-radius: 4px;
    padding: .7rem 2rem;
    font-size: 1rem;
    color: white;
    font-family: 'IBM Plex Mono', monospace;
    margin-top: 1rem;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    & {
      min-width: 270px;
      padding: 35px;
    }
  }

`

export const Fechar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  top: -30px;
  right: -30px;
  position: absolute;
  background: #E54;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.3);
  font-size: 1.2rem;
  color: white;
  font-family: 'IBM Plex Mono', monospace;
  cursor: pointer;
`