import logga from "./assets/logga.png";
import { Header } from "./styled components/Header";

function App() {
  return (
    <Header>
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
    </Header>
  );
}

export default App;
