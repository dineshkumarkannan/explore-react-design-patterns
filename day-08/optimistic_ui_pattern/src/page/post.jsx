import { useEffect, useState } from "react";
import { getPost } from "../services/postService";
import Comments from "./comments";

const Post = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const data = await getPost(1);
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (loading) return <div>Loading post...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div className="border-2 rounded-2xl p-2 bg-gray-400 text-black flex flex-col gap-1.5">
      <h2 className="text-2xl font-bold">{post?.title}</h2>
      <p className="text-m">{post?.body}</p>
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
