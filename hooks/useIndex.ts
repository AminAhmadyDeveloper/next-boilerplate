import { IPostsResponse } from "@interfaces/IPost";
import axiosService from "@common/axiosService";
import { useAppQuery } from "@hooks/useQuery";
import { useAppSelector } from "@store/store";

const useIndex = () => {
  const count = useAppSelector((state) => state.counter.value);

  const getPosts = async () => {
    const { data, error } = await axiosService<IPostsResponse>("posts");
    if (data) return data;
    if (error) return error;
  };

  const { data: posts } = useAppQuery<IPostsResponse>(["posts"], getPosts);

  const reactQueryCardText = posts
    ? posts[count]?.body.substring(0, 110)
    : "Error Fetching Data";

  return { posts, reactQueryCardText };
};

export default useIndex;
