import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 3rem auto 0;
  padding: 0 2rem;
  padding-bottom: 2rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.cyan};
    position: relative;

    &::after {
      content: '';
      height: 4px;
      border-radius: 0 0 3px 3px;
      width: 80px;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.colors.cyan};
    }
  }
`

export const ProjectsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  a {
    display: inline-block;
    width: 100%;
  }
`

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 5px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 200px;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .project-info {
    padding: 1rem;

    p.description {
      color: ${({ theme }) => theme.colors.gray[500]};
    }

    p.techs-used {
      margin-top: 0.25rem;
      color: ${({ theme }) => theme.colors.cyan};
    }
  }

  @media (min-width: 768px) {
    display: flex;

    img {
      width: 350px;
      border-radius: 5px 0 0 5px;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`
