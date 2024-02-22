import { StateCreator } from "..";
import { Post } from "@/api/types";

export interface PostSlice {
  posts?: Post[];
  addPost: (post: Post) => void;
  removePost: (id: number) => void;
}

const createPostSlice: StateCreator<PostSlice> = (set, get) => ({
  post: undefined,
  addPost: (post) => {
    set({ posts: [...(get()?.posts ?? []), post] });
  },
  removePost: (id) => {
    set({ posts: get()?.posts?.filter((post) => post.id !== id) });
  },
});

export default createPostSlice;
