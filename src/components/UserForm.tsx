import { defaultUser, User } from "../models/User";
import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonStyled } from "../styled components/ButtonStyled";
import { InputStyled } from "../styled components/InputStyled";
import { FormStyled } from "../styled components/FormStyled";
import { Link } from "react-router-dom";

export const UserForm = () => {
  const [user, setUser] = useState<User>(defaultUser);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const username = e.target.name;

    // if (e.target.type === "text") {
    //   setUser({ ...user, [username]: e.target.value });
    // }

    setUser({ ...user, username: e.target.value });

    localStorage.setItem("username", user.username);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <h2>Vem är det som ska spela?</h2>
        <InputStyled
          type="text"
          value={user.username}
          placeholder="Användarnamn"
          onChange={handleChange}
        />
        <h2>{user.username}</h2>
        <ButtonStyled type="submit">
          <Link to={"/gitgame"}>Starta spelet</Link>
        </ButtonStyled>
        {/* <p>{JSON.stringify(user)}</p> */}
      </FormStyled>
    </>
  );
};
