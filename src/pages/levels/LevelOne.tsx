import React, { useRef } from "react";
import { XTerm } from "xterm-for-react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import { GitCard } from "../../components/GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";

export const LevelOne = () => {
  // const xtermRef = useRef<any>(null);

  // React.useEffect(() => {
  //   xtermRef.current.terminal.writeln("Hello, World!");
  // }, []);

  const commands = {
    whoami: "wilma",
    gitadd: "added file to staged changes",
    gitcommit: "* files changed, 0 insertions(+), 0 deletions(-)",
  };

  return (
    <>
      <div className="game-root">
        <div className="level-presentation">
          <div className="character-and-description">
            <h1>Level One</h1>
            <FeatherIcon icon="user" size="100" color="white" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sint nemo obcaecati laboriosam ea, ducimus incidunt, et
              vel in ipsum mollitia est eaque quaerat vitae. Architecto fuga at
              cupiditate similique.
            </p>
          </div>
        </div>
        <div className="game">
          <div>
            <hr className="game-input" />
          </div>
          <div>
            <hr className="game-input" />
          </div>
          <div>
            <hr className="game-input" />
          </div>
        </div>
        <div className="terminal-container" id="terminal">
          {/* <XTerm ref={xtermRef} /> */}
          <TerminalContextProvider>
            <ReactTerminal
              welcomeMessage="C:\Users\user\Documents\git-game-app>"
              commands={commands}
              showControlBar={false}
              theme="matrix"
            />
          </TerminalContextProvider>
        </div>
        <div className="playable-cards">
          <GitCard
            title="git add"
            icon="file-plus"
            desc="Add file to staged changes"
          />
          <GitCard
            title="git commit"
            icon="git-commit"
            desc="Record/snapshot file permanently in the version history."
          />
          <GitCard
            title="git push"
            icon="repo-push"
            desc="Send commited changes to your remote repo"
          />
        </div>
      </div>
    </>
  );
};
