import styled from 'styled-components'

export const Anchor = styled.a`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 1rem;
  border-radius: 8px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    margin-right: 1rem;
  }
`
