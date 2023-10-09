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
    padding: 1%;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-right: 50px;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
