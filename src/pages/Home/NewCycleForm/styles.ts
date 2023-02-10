import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['primary-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors['primary-500']};
  font-weight: inherit;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors['primary-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['secundary-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['primary-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
