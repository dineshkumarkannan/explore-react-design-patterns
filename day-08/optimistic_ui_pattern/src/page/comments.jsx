import React, {
  useEffect,
  useOptimistic,
  useState,
  startTransition,
} from "react";
import { addComments, getComments } from "../services/postService";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [optimisticComments, setOptimisticComments] = useOptimistic(comments);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments(params) {
      try {
        setLoading(true);
        const data = await getComments(postId);
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError(err.message || "Failed to load comments");
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postId]);

  const hanldeCommentSubmit = async (comment) => {
    setLoading(true);
    const tempId = "temp-" + Date.now();
    console.log(comment);
    const optimisticComment = {
      id: tempId,
      body: comment.body,
      name: comment.title,
      postId,
    };

    // Add optimistic comment instantly
    setOptimisticComments([...optimisticComments, optimisticComment]);

    try {
      const newComment = await addComments(postId, {
        name: optimisticComment.name,
        email: "john@example.com",
        body: optimisticComment.body,
      });
      setComments([...comments, newComment]);
    } catch (err) {
      console.error("Error adding comment:", err.message);
      setComments([...comments]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommentsList comments={optimisticComments} />
      <CommentForm
        onSubmit={(comment) => {
          console.log(comment);
          startTransition(async () => hanldeCommentSubmit(comment));
        }}
      />
      {loading && "Loading..."}
    </div>
  );
};

export default Comments;
