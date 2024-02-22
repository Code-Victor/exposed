import { StateCreator as ZStateCreator } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createPostSlice, { PostSlice } from "./slices/post";
import createUserSlice, { userSlice as UserSlice } from "./slices/user";

import { StateStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const mmkvStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

// Define the slices and the state creator
type Slices = PostSlice & UserSlice;
export type StateCreator<T> = ZStateCreator<Slices, [], [], T>;

/**
 * Creates a global store with the given slices
 * @returns A hook to use the store
 * @example
 * const user = useStore((state) => state.user);
 * const setUser = useStore((state) => state.setUser);
 * // You can return an object or array
 * const [user, setUser] = useStore((state) => [state.user, state.setUser]);
 * @see {@link [Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)}
 */
const useStore = createWithEqualityFn<Slices>()(
  subscribeWithSelector(
    persist(
      (...a) => ({
        ...createPostSlice(...a),
        ...createUserSlice(...a),
      }),
      {
        name: "nurovant-store",
        storage: createJSONStorage(() => mmkvStorage),
        partialize: (state) => ({
          phoneId: state.user, // <-- Partialize the state to only persist the `user` object
        }),
      }
    )
  ),
  shallow
);

export default useStore;
