import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  margin: 0;
  background-color: #7a5ba4;
  align-items: center;
  width: 100vw;
  #logo {
    width: 90px;
    margin-right: 50px;
    padding: 10%;
  }
  #logo:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  nav {
    position: absolute;
    right: 15px;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-right: 50px;
    cursor: pointer;
  }
  li:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
  .fa-solid {
    font-size: 30px;
  }
`;
