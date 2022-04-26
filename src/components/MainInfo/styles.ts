import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  height: 100%;
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 2rem;
`

export const MyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .info {
    span {
      display: inline-block;
      font-size: 1.7rem;
    }

    span,
    p {
      margin-top: 0.25rem;
    }
  }

  @media (min-width: 768px) {
    img.avatar {
      width: 160px;
      height: 160px;
    }

    .info {
      span {
        font-size: 2rem;
      }
    }
  }
`

export const OverviewInfo = styled.div`
  margin-top: 1rem;

  h1 {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }

  .quote {
    font-size: 1.2rem;
    margin-top: 2rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

export const StackContainer = styled.div`
  margin: 2rem 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .tech {
    width: 100%;
    height: 140px;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 5px;

    display: flex;
    align-items: center;

    transition: 0.2s;

    &:hover {
      border: 1.5px solid ${({ theme }) => theme.colors.cyan};
      transform: scale(1.1);
      cursor: default;
    }

    img {
      width: 100px;
      height: 100px;
    }

    strong {
      font-size: 1.5rem;
      margin-left: 2rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`
