import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.colors['primary-100']};

  span {
    background-color: ${({ theme }) => theme.colors['primary-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separetor = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors['secundary-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
