import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 4rem);
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`
export const Content = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  div > h2 {
    color: ${({ theme }) => theme.colors.cyan};
  }

  div > a {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    img {
      height: 60px;
      width: 60px;
    }
  }

  .my-experience {
    margin-top: 1.5rem;

    ul {
      padding-left: 1rem;
    }
  }

  .dorper-info {
    margin-top: 2rem;

    p {
      margin-bottom: 1rem;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .social-media-container {
    margin-top: 2rem;

    .social-media {
      margin-top: 1rem;
    }
  }
`
