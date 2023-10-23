import styled from "styled-components";

export const NavModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavModalStyled = styled.div`
  background-color: #545454;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  border-radius: 20px;
  position: absolute;
  top: 90px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  article {
    line-height: 25pt;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  p:hover {
    color: #c06ca2;
    cursor: pointer;
  }
`;
