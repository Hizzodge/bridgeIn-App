import { FC } from "react";

interface CommentProps {
  id: number;
  name: string;
  email: string;
  body: string;
  onClick?: () => void;
}

const Comment: FC<CommentProps> = ({ id, name, email, body, onClick }) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className="flex flex-col mt-4 bg-neutral-400 border-neutral-500 p-5 rounded-lg"
    >
      <h1>Name: {name}</h1>
      <h3>Email: {email}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
