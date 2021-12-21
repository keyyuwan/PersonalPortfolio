import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    background: ${({ theme }) => theme.colors.gray[800]};
    padding: 2rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`
