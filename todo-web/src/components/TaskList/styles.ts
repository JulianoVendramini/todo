import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
  min-height: 40rem;
  border-radius: 1.8rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  border-bottom: 1px solid ${theme.colors.lightBlue};
`

export const Title = styled.h2`
  font-size: 2.8rem;
  color: #575bde;
`

export const TasksCount = styled.span`
  font-size: 1.8rem;
  color: ${theme.colors.lightBlue};
`

export const AddNewtaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -2.5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #575bde;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 2.2rem;
  color: white;
`
