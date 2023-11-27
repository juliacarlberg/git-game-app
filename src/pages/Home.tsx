import { useState } from "react";
import { Header } from "../components/Header";
import { UserForm } from "../components/UserForm";
import { ButtonStyled } from "../styled components/ButtonStyled";
import { HomeWrapper, WrapperStyled } from "../styled components/WrapperStyled";

export const Home = () => {
  const [newGame, setNewGame] = useState(false);

  const startNewGame = () => {
    setNewGame(true);
  };
  return (
    <>
      <Header></Header>
      <WrapperStyled>
        <HomeWrapper>
          <h1> GIT GAME</h1>
          <i className="fa-brands fa-github"></i>
          <p>
            Vill du lära dig Git? Spela vårat spel och lär dig hur git fungerar
            samt terminalen och dess kommandon.
          </p>
          <ButtonStyled>Fortsätt spela</ButtonStyled>
          <ButtonStyled onClick={startNewGame}>Starta nytt spel</ButtonStyled>
          {newGame ? <UserForm /> : null}
        </HomeWrapper>
      </WrapperStyled>
    </>
  );
};
