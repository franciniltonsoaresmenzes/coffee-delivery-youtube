import styled from 'styled-components';

export const CompliteOrderContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.div`
  width:100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`;

