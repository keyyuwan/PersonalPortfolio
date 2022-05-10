import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 4rem 0;

    span {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    .email-card {
      color: ${({ theme }) => theme.colors.textPrimary};
      background: ${({ theme }) => theme.colors.gray[800]};
      padding: 1rem;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h1 {
      margin: 0;
      font-size: 2.5rem;
      max-width: 400px;
    }
  }

  @media (min-width: 1024px) {
    gap: 3rem;

    h1 {
      font-size: 3rem;
      max-width: 500px;
    }
  }
`
