import styled from 'styled-components'

export const Header = styled.header`
  margin: 2rem 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  .icon-container {
    cursor: pointer;

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  h1 {
    font-size: 1.5rem;
    background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {
    .icon-container {
      svg {
        font-size: 32px;
      }
    }

    h1 {
      font-size: 2rem;
    }
  }
`

export const About = styled.section`
  img {
    height: 180px;
    width: 100%;
  }

  .content {
    p {
      margin-top: 1rem;
    }

    a {
      display: inline-block;
      margin-top: 1rem;
      padding: 1rem;
      font-weight: bold;
      border-radius: 8px;

      border: 1.5px solid ${({ theme }) => theme.colors.cyan};
      color: ${({ theme }) => theme.colors.textPrimary};

      transition: 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.cyan};
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;

    img {
      height: 220px;
    }

    .content {
      p {
        font-size: 1.1rem;
      }
    }
  }
`

export const Divider = styled.div`
  margin: 4rem auto;
  width: 100px;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray[500]};

  @media (min-width: 768px) {
    width: 200px;
  }
`

export const Activities = styled.section`
  margin-top: 2rem;
  padding-bottom: 2rem;

  .list {
    margin-top: 2rem;
    border-radius: 8px;

    ul {
      list-style: none;

      li {
        margin-top: 0.8rem;
        font-size: 1.1rem;
        font-weight: 600;

        &::before {
          content: '•';
          padding-right: 0.6rem;
          color: ${({ theme }) => theme.colors.cyan};
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 767px) {
    img {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .list {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;

      img {
        height: 220px;
        visibility: visible;
      }
    }
  }
`
