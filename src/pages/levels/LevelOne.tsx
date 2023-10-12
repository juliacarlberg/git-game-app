import React, { useRef } from "react";
import { Header } from "../../components/Header";
import { XTerm } from "xterm-for-react";
import { GitAdd } from "../../components/Cards/GitAdd";

export const LevelOne = () => {
  const xtermRef = useRef<any>(null);

  React.useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln("Hello, World!");
  }, []);

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
        <div className="terminal-container" id="terminal">
          <XTerm ref={xtermRef} />
        </div>
        <div className="playable-cards">
          <GitAdd />
        </div>
      </div>
    </>
  );
};
