import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['primary-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors['secundary-500']};

  &:not(:disabled):hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors['secundary-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme.colors['danger-500']};

  &:not(:disabled):hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors['danger-700']};
  }
`
