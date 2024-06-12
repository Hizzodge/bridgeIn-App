import { FC, useState } from "react";

interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
  onClick?: () => void;
  onDelete?: (id: number) => void;
}

const Comment: FC<CommentProps> = ({
  id,
  name,
  email,
  body,
  onClick,
  onDelete,
}) => {
  const [commentBody, setCommentBody] = useState(body);
  const [editMode, setEditMode] = useState(false);

  const updateComment = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: commentBody }),
      }
    );
    const data = await response.json();
    setCommentBody(data.body);
    setEditMode(false);
  };

  const deleteComment = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    });
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <div
      key={id}
      onClick={onClick}
      className="flex flex-col mt-4 bg-neutral-400 border-neutral-500 p-5 rounded-lg"
    >
      <h1>Name: {name}</h1>
      <h3>Email: {email}</h3>
      {editMode ? (
        <input
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
      ) : (
        <p>{commentBody}</p>
      )}
      <div className="flex justify-center gap-14 mt-4">
        {editMode ? (
          <button onClick={updateComment}>Save</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
        <button onClick={deleteComment}>Delete</button>
      </div>
    </div>
  );
};

export default Comment;
