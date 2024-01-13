import { useEffect, useState } from "react";
import fetchingImg from "./assets/data-fetching.png";
import { get } from "../util/http";
import BlogPosts, { BlogPost } from "../components/BlogPosts";

type RowDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function BlogFetchApp() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const posts = await get<RowDataBlogPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const blogPosts = posts.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        };
      }) as BlogPost[];

      setIsFetching(false);
      setFetchedPosts(blogPosts);
    }
    fetchPosts();
  }, []);

  // if (isFetching) {
  //   return ;
  // }

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process."
      />
      {isFetching && <p id="loading-fallback">Fetching...</p>}
      {!isFetching && fetchedPosts.length !== 0 && (
        <BlogPosts posts={fetchedPosts} />
      )}
    </main>
  );
}

export default BlogFetchApp;
