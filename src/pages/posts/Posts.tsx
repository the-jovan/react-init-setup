import { Helmet } from "react-helmet-async";
import { usePostsApiHelper } from "./usePostsApiHelper";

export const Posts = () => {
  const {
    getPostsData: { data, isLoading },
  } = usePostsApiHelper();

  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <section>
        {isLoading && <div>Loading</div>}
        {data && (
          <ul>
            {data.map((i: any) => (
              <li>{i.title}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
