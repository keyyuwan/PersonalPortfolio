import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.gray[800]};

  transition: 0.2s;

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.cyan};
    transform: scale(1.05);
  }

  span {
    background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 0.8rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`
