import styled from 'styled-components'

export const Greetings = styled.h1`
  margin-top: 1.5rem;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 2rem;

    h1 {
      font-size: 3.25rem;
    }
  }
`

export const KeyWrapper = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`

export const InfoAboutMe = styled.div`
  span {
    display: inline-block;
    font-size: 1.7rem;
  }

  span,
  p {
    margin-top: 0.25rem;
  }

  @media (min-width: 768px) {
    span {
      font-size: 2rem;
    }
  }
`

export const DownloadCVButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.cyan};

  background: 0;
  color: ${({ theme }) => theme.colors.textPrimary};

  font-size: 1.2rem;
  font-weight: bold;

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.cyan};
  }

  @media (min-width: 768px) {
    width: 240px;
  }
`

export const StackContainer = styled.div`
  margin: 3rem 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export const Tech = styled.div`
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
    width: 68px;
    height: 68px;
  }

  strong {
    font-size: 1.5rem;
    margin-left: 2rem;
  }
`

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  margin-top: 2rem;

  background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    max-width: 800px;
  }
`
