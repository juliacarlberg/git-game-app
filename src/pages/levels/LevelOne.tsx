import { GitCard } from "../../components/GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
export type Position = [number];
export type PositionObserver = ((position: Position) => void) | null;

const ChildComponent = (props: { key: number; number: number }) => {
  return (
    <GitCard
      title="git add"
      icon="file-plus"
      desc="Add file to staged changes"
    />
  );
};

export const LevelOne = () => {
  const [firstAnswer, setFirstAnswer] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const answers = [];

  for (let i = 0; i < firstAnswer; i++) {
    answers.push(<ChildComponent key={i} number={i} />);
  }

  const gitAdd = (): string => {
    setFirstAnswer((count) => count + 1);
    return "added file to staged changes";
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
          <div className="answers"> {...answers}</div>
          <div className="answers"></div>
          <div className="answers"></div>
        </div>
        <div className="terminal-container" id="terminal">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let newOutput = "";
                newOutput = output + "\n" + "$ " + input + "\n";
                switch (input) {
                  case "git add":
                    newOutput += gitAdd();
                }
                setOutput(newOutput);
                setInput("");
              }
            }}
          />
          <div className="terminal">{output}</div>
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
