import { router } from "react-query-kit";
import { getPosts, createPost } from "..";
/**
 * @description
 * This is a router for the post resource.
 * It contains the following routes:
 * - getPosts
 * - createPost
 * @example
 * const { data } = postRouter.getPosts.useQuery();
 * const { mutate } = postRouter.createPost.useMutation();
 */
export const postRouter = router("post", {
  getPosts: router.query({
    fetcher: getPosts,
  }),
  createPost: router.mutation({
    mutationFn: createPost,
  }),
});
