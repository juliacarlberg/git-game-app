import { HeaderStyled } from "../styled components/HeaderStyled";
import logga from "../assets/logga.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Settings } from "./Settings";
import { Questions } from "./Questions";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [showQA, setShowQA] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showQAModal = () => {
    setShowQA(true);
  };

  const hideQAModal = () => {
    setShowQA(false);
  };
  return (
    <>
      <HeaderStyled>
        <Link to={"/"}>
          <img id="logo" src={logga} alt="Logga med vit text Learn Git" />
        </Link>
        <nav>
          <ul>
            <li onClick={show ? hideModal : showModal}>
              {show ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-gear"></i>
              )}
            </li>
            <li onClick={showQA ? hideQAModal : showQAModal}>
              {showQA ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-circle-question"></i>
              )}
            </li>
          </ul>
        </nav>
      </HeaderStyled>
      {show ? <Settings /> : null}
      {showQA ? <Questions /> : null}
    </>
  );
};
