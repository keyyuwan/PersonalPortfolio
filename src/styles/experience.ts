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

  .social-media-container {
    margin-top: 2rem;

    .social-media {
      margin-top: 1rem;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
  }

  img {
    height: 56px;
    width: 56px;
  }
`

export const MyExperience = styled.div`
  margin-top: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.cyan};
  }

  .skills-list-container {
    margin-top: 2rem;
    border: 2px solid ${({ theme }) => theme.colors.cyan};
    border-radius: 8px;
    padding: 1rem;

    ul {
      list-style: none;

      li {
        margin-top: 0.8rem;
        font-size: 1.1rem;
        font-weight: bold;

        &::before {
          content: '•';
          padding-right: 0.6rem;
          color: ${({ theme }) => theme.colors.cyan};
          font-weight: bold;
        }
      }
    }

    img {
      width: 0;
      height: 0;
      visibility: hidden;
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        visibility: visible;
        width: 240px;
        height: 240px;
      }
    }
  }
`

export const DorperInfo = styled.div`
  margin-top: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  .dorper-info-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
      max-width: 640px;
      font-size: 1.2rem;
      margin-bottom: 1rem;

      span {
        color: ${({ theme }) => theme.colors.cyan};
      }
    }

    img {
      width: 240px;
      height: 240px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;

      p {
        margin-bottom: 0;
        font-size: 1.5rem;
      }
    }
  }
`
