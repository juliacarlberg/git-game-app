import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
  padding: 3%;
  width: 35%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: #7a5ba4;
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c06ca2;
  border-radius: 20px;
  width: 280px;
  position: absolute;
  top: 150px;
  left: 30px;
  h1 {
    color: black;
  }
  .character_icon {
    width: 280px;
  }
  p {
    padding: 10%;
    color: black;
    font-weight: bold;
  }
`;
