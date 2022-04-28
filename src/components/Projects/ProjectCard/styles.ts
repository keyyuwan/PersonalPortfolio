import styled from 'styled-components'

export const Container = styled.div`
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

      background: -webkit-linear-gradient(45deg, #00bcd4, #00ff95 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
