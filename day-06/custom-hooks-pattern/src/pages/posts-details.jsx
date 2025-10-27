import React from "react";
import { useFetch } from "../hooks/useFetch";

const PostsDetails = () => {
  const {
    data: posts,
    isPending,
    isError,
    errorMessage,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isPending) {
    return (
      <div className="text-2xl text-center text-gray-800 dark:text-gray-100">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-2xl text-center text-gray-800 dark:text-gray-100">
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="ml-2 text-black dark:text-white">
      <h2>Posts</h2>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <div key={post?.id} className="p-2">
              {post?.id} - {post.title}
            </div>
          );
        })}
    </div>
  );
};

export default PostsDetails;
