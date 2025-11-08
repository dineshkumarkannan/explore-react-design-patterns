import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body.trim()) return;
    onSubmit({ title, body });
    setBody("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      <input
        type="text"
        placeholder="Write a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Write a comment..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
