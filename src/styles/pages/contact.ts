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

    .email-card {
      color: ${({ theme }) => theme.colors.textPrimary};
      background: ${({ theme }) => theme.colors.gray[800]};
      padding: 1rem;
      border-radius: 8px;

      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`
