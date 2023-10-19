import { GitCard } from "../../components/GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../models/ItemTypes";
export type Position = [number];
export type PositionObserver = ((position: Position) => void) | null;

const FirstAnswer = (props: { key: number; number: number }) => {
  return (
    <GitCard
      title="git add"
      icon="file-plus"
      desc="Add file to staged changes"
    />
  );
};

const SecondAnswer = (props: { key: number; number: number }) => {
  return (
    <GitCard
      title="git commit"
      icon="git-commit"
      desc="Record/snapshot file permanently in the version history."
    />
  );
};

const ThirdAnswer = (props: { key: number; number: number }) => {
  return (
    <GitCard
      title="git push"
      icon="repo-push"
      desc="Send commited changes to your remote repo"
    />
  );
};

export const LevelOne = () => {
  const [firstAnswer, setFirstAnswer] = useState(0);
  const [secondAnswer, setSecondAnswer] = useState(0);
  const [thirdAnswer, setThirdAnswer] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const answers = [];
  const answerCards = [
    <GitCard
      title="git add"
      icon="file-plus"
      desc="Add file to staged changes"
    />,
    <GitCard
      title="git commit"
      icon="git-commit"
      desc="Record/snapshot file permanently in the version history."
    />,
    <GitCard
      title="git push"
      icon="repo-push"
      desc="Send commited changes to your remote repo"
    />,
  ];

  for (let i = 0; i < firstAnswer; i++) {
    answers.push(<FirstAnswer key={i} number={i} />);
    answerCards.splice(i, 1);
  }

  const gitAdd = (): string => {
    setFirstAnswer((count) => count + 1);
    return "added file to staged changes";
  };

  const gitCommit = (): string => {
    setSecondAnswer((count) => count + 1);
    return "files changed";
  };

  for (let i = 0; i < secondAnswer; i++) {
    answers.push(<SecondAnswer key={i} number={i} />);
    answerCards.splice(i, 1);
  }

  const gitPush = (): string => {
    setThirdAnswer((count) => count + 1);
    return "changes pushed to repository";
  };

  for (let i = 0; i < thirdAnswer; i++) {
    answers.push(<ThirdAnswer key={i} number={i} />);
    answerCards.splice(i, 1);
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => {
      gitAdd();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

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
          <div ref={drop} className="answers">
            {isOver && (
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  zIndex: 1,
                  opacity: 0.5,
                  backgroundColor: "yellow",
                }}
              />
            )}
            {answers[0]}
          </div>
          <div className="answers">{answers[1]}</div>
          <div className="answers">{answers[2]}</div>
        </div>
        <div className="terminal-container" id="terminal">
          <input
            type="text"
            placeholder=">>>"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let newOutput = "";
                newOutput = output + "\n" + "$ " + input + "\n";
                switch (input) {
                  case "git add":
                    newOutput += gitAdd();
                    break;
                  case "git commit":
                    newOutput += gitCommit();
                    break;
                  case "git push":
                    newOutput += gitPush();
                }
                setOutput(newOutput);
                setInput("");
              }
            }}
          />
          <div className="terminal">{output}</div>
        </div>
        <div className="playable-cards">{answerCards}</div>
      </div>
    </>
  );
};
