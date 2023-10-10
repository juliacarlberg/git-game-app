import { Header } from "../../components/Header";

export const LevelOne = () => {
  return (
    <>
      <Header></Header>
      <div className="game-root">
        <div className="level-presentation">
          <div className="character-and-description">
            <h1>Level One</h1>
            <img src="src\assets\person-244.png" />
          </div>
        </div>
        <div className="game">
          <div>
            <input></input>
          </div>
          <div>
            <input></input>
          </div>
          <div>
            <input></input>
          </div>
        </div>
        <div className="terminal"></div>
        <div className="playable-cards"></div>
      </div>
    </>
  );
};
