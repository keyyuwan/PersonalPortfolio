import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const MyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .info {
    span {
      display: inline-block;
    }

    span,
    p {
      margin-top: 0.25rem;
    }
  }
`

export const OverviewInfo = styled.div`
  margin-left: 1.5rem;

  h1 {
    font-size: 1.5rem;
  }

  .techs {
    margin-top: 1rem;

    .techs-list {
      margin-top: 1rem;

      strong {
        display: inline-block;
        line-height: 1.25rem;
      }

      .title {
        color: #00bcd4;
        display: inline-block;
        margin-bottom: 1rem;
      }

      .tech {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
          width: 32px;
          border-radius: 8px;
        }
      }
    }
  }
`
