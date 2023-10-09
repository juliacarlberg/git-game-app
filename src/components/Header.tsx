import { HeaderStyled } from "../styled components/HeaderStyled";
import logga from "../assets/logga.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <img id="logo" src={logga} alt="Logga med vit text Learn Git" />
      <nav>
        <ul>
          <li>
            <a href="">HEM</a>
          </li>
          <li>
            <a href="">SPELA</a>
          </li>
          <li>
            <a href="">OM OSS</a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
