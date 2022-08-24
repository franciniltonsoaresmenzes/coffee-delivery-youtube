import styled, { css } from 'styled-components';

interface QuantityInputContainerProps {
  size?: 'medium' | 'small'
}


export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display:flex;
  align-items: center;
  justify-content:  space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  ${({ size }) => 
    size === 'medium' && 
    css`
      padding: .5rem;
   `}

  ${({ size }) => 
    size === 'small' && 
    css`
      padding: .3rem .5rem;
   `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: .875rem;
  height: .875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: .4s;

  &:disabled {
    opacity: .4;
  }
  &:not(:disabled) {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;

