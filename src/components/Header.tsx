import { HeaderStyled } from "../styled components/HeaderStyled";
import logga from "../assets/logga.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <img id="logo" src={logga} alt="Logga med vit text Learn Git" />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Hem</Link>
          </li>
          <li>
            <Link to={"/gitgame"}>Spela</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>Om oss</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
