import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: #fff;
  border-bottom: 2px solid #000;
  box-shadow: 2px 2px 8px #00000077;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  img {
    width: 60px;
  }
`;

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > a {
    font-size: 18px;
    font-weight: 300;
    text-decoration: none;
    color: #090909;
    transition: 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;
