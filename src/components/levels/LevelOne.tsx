import { GitCard } from "../GitCard";
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../models/ItemTypes";
export type Position = [number];
export type PositionObserver = ((position: Position) => void) | null;
import character from "../../assets/gamecharacter.png";
import { CharacterWrapper } from "../../styled components/WrapperStyled";

export const LevelOne = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [answers, setAnswers] = useState<JSX.Element[]>([]);
  const [answerCards, setAnswerCards] = useState<JSX.Element[]>([
    <GitCard
      key={1}
      title="git add"
      icon="file-plus"
      desc="Add file to staged changes"
    />,
    <GitCard
      key={2}
      title="git commit"
      icon="git-commit"
      desc="Record/snapshot file permanently in the version history."
    />,
    <GitCard
      key={3}
      title="git push"
      icon="repo-push"
      desc="Send commited changes to your remote repo"
    />,
  ]);

  const LSUsername = localStorage.getItem("username");

  function shuffleCards(answerCards: JSX.Element[]) {
    let currentIndex = answerCards.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [answerCards[currentIndex], answerCards[randomIndex]] = [
        answerCards[randomIndex],
        answerCards[currentIndex],
      ];
    }

    return answerCards;
  }

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
      case "git add":
        console.log("add");
        findCorrectCard(command);
        return "added file to staged changes";

      case "git commit":
        console.log("commit");
        findCorrectCard(command);
        return "files changed";

      case "git push":
        findCorrectCard(command);
        return "changes pushed to repository";
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

  useEffect(() => {
    let shuffledCards = shuffleCards(answerCards);
    setAnswerCards([...shuffledCards]);
  }, []);

  return (
    <>
      <div className="game-root">
        <div className="level-presentation">
          <CharacterWrapper>
            <h1>Level 1</h1>
            <img
              className="character_icon"
              src={character}
              alt="Illustration på en ung kvinna med glasögon"
            />
            <p>
              Hej {LSUsername}! Jag är ute på min LIA och ska göra min första
              git commit, kan du hjälpa mig med vilka steg jag ska göra och i
              vilken ordning?
              <br />
              <br />
              Dra korten till rätt plats i rätt ordning eller skriv i
              terminalen.
            </p>
          </CharacterWrapper>
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
          <div className="answers">{answers[1]}</div>
          <div className="answers">{answers[2]}</div>
        </div>
        <div className="playable-cards">{answerCards}</div>
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
      </div>
    </>
  );
};
