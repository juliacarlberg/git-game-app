export interface User {
  username: string;
  level: number;
}

export const defaultUser: User = {
  username: "",
  level: 1,
};
