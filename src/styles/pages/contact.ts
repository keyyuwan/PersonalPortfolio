import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    a {
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textPrimary};
      background: ${({ theme }) => theme.colors.gray[800]};
      padding: 1rem;
      border-radius: 8px;

      transition: 0.5s;

      &:hover {
        border: 1.5px solid ${({ theme }) => theme.colors.cyan};

        transform: scale(1.1);
      }

      svg {
        margin-right: 1rem;
      }
    }
  }
`
