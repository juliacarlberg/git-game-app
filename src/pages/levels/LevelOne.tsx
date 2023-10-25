import { GitCard } from "../../components/GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../models/ItemTypes";
export type Position = [number];
export type PositionObserver = ((position: Position) => void) | null;

export const LevelOne = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [answers, setAnswers] = useState<JSX.Element[]>([]);
  const [answerCards, setAnswerCards] = useState<JSX.Element[]>([
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
  ]);

  const findCorrectCard = (command: string) => {
    for (let i = 0; i < answerCards.length; i++) {
      if (answerCards[i].props.title === command) {
        let index = answerCards.indexOf(answerCards[i]);
        answers.push(answerCards[i]);
        answerCards.splice(index, 1);
      }
    }
  };

  const playersMove = (command: string): string => {
    switch (command) {
      case "git add":
        findCorrectCard(command);
        return "added file to staged changes";

      case "git commit":
        findCorrectCard(command);
        return "files changed";

      case "git push":
        findCorrectCard(command);
        return "changes pushed to repository";
    }
    setAnswers([...answers]);
    setAnswerCards([...answerCards]);
    return "";
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop(item: { title: string }) {
      playersMove(item.title);
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
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
                    newOutput += playersMove("git add");
                    break;
                  case "git commit":
                    newOutput += playersMove("git commit");
                    break;
                  case "git push":
                    newOutput += playersMove("git push");
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
