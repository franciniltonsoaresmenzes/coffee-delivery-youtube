import styled from 'styled-components';

export const PaymentMethodInputContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']}; 
  display: flex;
  align-items: center;
  jusctify-content: flex-start;
  gap: .75rem;
  font-size: .75rem; 
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: .4s;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`;

