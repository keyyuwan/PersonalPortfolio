import styled from 'styled-components'

interface ProjectImageProps {
  image: string
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 5px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  .project-info {
    padding: 1rem;
    width: 100%;

    p.description {
      color: ${({ theme }) => theme.colors.gray[500]};
    }

    p.techs-used {
      margin-top: 0.25rem;
      color: ${({ theme }) => theme.colors.cyan};

      background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 768px) {
    display: flex;

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }
  }
`

export const ProjectImage = styled.div<ProjectImageProps>`
  height: 200px;
  width: 100%;
  background-image: url(${({ image }) => image});
  background-position: center top;
  background-size: cover;
  border-radius: 5px 5px 0 0;

  @media (min-width: 768px) {
    width: 300px;
    border-radius: 5px 0 0 5px;
  }
`
