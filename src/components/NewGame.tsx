import { ChangeEvent, useState } from "react";
import { ButtonStyled } from "../styled components/ButtonStyled";
import { InputStyled } from "../styled components/InputStyled";

export const NewGame = () => {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <h2>Vem är det som ska spela?</h2>
      <InputStyled
        type="text"
        value={name}
        placeholder="Användarnamn"
        onChange={handleChange}
      />
      <h2>{name}</h2>
      <ButtonStyled>Starta spelet</ButtonStyled>
    </>
  );
};
