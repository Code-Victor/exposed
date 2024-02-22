import { StateCreator } from "..";

interface User {
  id: string;
  name: string;
  email: string;
  phoneId: string;
}
export interface userSlice {
  user?: User;
  setUser: (user: User) => void;
}

const createUserSlice: StateCreator<userSlice> = (set) => ({
  user: undefined,
  setUser: (user) => {
    set(() => ({ user }));
  },
});

export default createUserSlice;
