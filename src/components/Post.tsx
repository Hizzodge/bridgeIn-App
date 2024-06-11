import { FC } from "react";

interface PostProps {
  id: number;
  title: string;
  body: string;
  onClick: () => void;
}

const Posts: FC<PostProps> = ({ id, title, body, onClick }) => {
  return (
    <div
      key={id}
      className="flex flex-col mt-4 bg-neutral-200 border-neutral-300 w-full p-5 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h2 className="my-2 font-semibold">Title: {title}</h2>
      <p className="text-justify mt-4">{body}</p>
    </div>
  );
};

export default Posts;
