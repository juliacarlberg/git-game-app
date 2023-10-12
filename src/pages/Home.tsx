import { Header } from "../components/Header";
import { ButtonStyled } from "../styled components/ButtonStyled";
import { HomeWrapper, WrapperStyled } from "../styled components/WrapperStyled";

function Home() {
  return (
    <>
      <Header></Header>
      <WrapperStyled>
        <HomeWrapper>
          <i className="fa-brands fa-github"></i>
          <h1> GIT GAME</h1>
          <p>
            Vill du lära dig Git? Spela vårat spel och lär dig hur git fungerar
            samt terminalen och dess kommandon.
          </p>
          <ButtonStyled>Fortsätt spela</ButtonStyled>
          <ButtonStyled>Starta nytt spel</ButtonStyled>
        </HomeWrapper>
      </WrapperStyled>
    </>
  );
}

export default Home;
