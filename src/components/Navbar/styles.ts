import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 10px;
    font-size: 28px;
    font-weight: 600;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;

    a {
      color: var(--dark-blue);
    }

    a + a {
      margin-left: 40px;
    }

    a:hover,
    a.active {
      color: var(--black);
      font-weight: 600;
    }
  }
`;

export const SignInButton = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: inline-block;
    background: var(--light-background);
    padding: 10px 40px;
    border-radius: 50px;

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;
