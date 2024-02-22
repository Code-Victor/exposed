export interface GetPostsResponse extends Array<Post> {}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
