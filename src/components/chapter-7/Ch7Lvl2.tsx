import { GitCard } from "../GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../models/ItemTypes";
import { Header } from "../Header";
export type Position = [number];
export type PositionObserver = ((position: Position) => void) | null;

export const Ch7Lvl2 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [answers, setAnswers] = useState<JSX.Element[]>([]);
  const [answerCards, setAnswerCards] = useState<JSX.Element[]>([
    <GitCard
      key={1}
      title="git reset [filNamn]"
      icon="refresh-ccw"
      desc="Radera din git historik"
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
    setAnswers([...answers]);
    setAnswerCards([...answerCards]);
  };

  const playersMove = (command: string): string => {
    console.log(command);
    switch (command) {
      case "git reset":
        findCorrectCard(command);
        return `Reset "commit"`;
    }
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
      <Header></Header>
      <div className="game-root">
        <div className="level-presentation">
          <div className="character-and-description">
            <h1>Kaiptel 7 Nivå 2</h1>
            <img
              src="src\assets\char1.png"
              width="200"
              alt="Karaktären Amanda"
            />
            <p>
              Det finns ett annat sätt att göra på också, som raderar historiken
              utan att göra en ny commit.
            </p>
          </div>
        </div>
        <div ref={drop} className="game">
          {isOver && (
            <div
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                zIndex: 1,
                opacity: 0.3,
                backgroundColor: "yellow",
              }}
            />
          )}
          <div className="answers">{answers[0]}</div>
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
                  case "git reset":
                    newOutput += playersMove("git reset");
                    break;
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
