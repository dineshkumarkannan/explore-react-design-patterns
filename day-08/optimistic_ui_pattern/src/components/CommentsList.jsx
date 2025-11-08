const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return;
  return (
    <div className="flex flex-col gap-2">
      <h5>Comments({comments.length})</h5>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="bg-gray-300 p-2 rounded-2xl">
            <h6 className="font-bold">{comment.name}</h6>
            {comment.body}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
