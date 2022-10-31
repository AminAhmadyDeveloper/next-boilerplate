import { IPostsResponse } from "@interfaces/IPost";
import axiosService from "@common/axiosService";
import { useAppQuery } from "@hooks/useQuery";

const useIndex = () => {
  const getPosts = async () => {
    const { data, error } = await axiosService<IPostsResponse>("posts", {
      params: {
        page: 0,
      },
    });
    if (data) return data;
    if (error) return error;
  };

  const { data: posts } = useAppQuery<IPostsResponse>(["posts"], getPosts);

  return { posts };
};

export default useIndex;
