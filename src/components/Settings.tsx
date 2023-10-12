import {
  NavModalStyled,
  NavModalWrapper,
} from "../styled components/NavModalStyled";

export const Settings = () => {
  return (
    <>
      <NavModalWrapper>
        <NavModalStyled>
          <article>
            <p>Byt level</p>
            <p>Byt spelare</p>
            <p>Avsluta spel</p>
          </article>
        </NavModalStyled>
      </NavModalWrapper>
    </>
  );
};
