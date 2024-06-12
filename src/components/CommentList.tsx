import { FC, useState, useEffect } from "react";
import Comment from "./Comment";

interface CommentListProps {
  postId: number;
}

const CommentList: FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<
    { id: number; name: string; email: string; body: string }[]
  >([]);
  const [errors, seterrors] = useState<string>("");

  useEffect(() => {
    console.log(`Fetching comments for postId: ${postId}`);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching comments");
        }
        return response.json();
      })
      .then((commentsData) => {
        console.log(`Comments fetched: `, commentsData);
        setComments(commentsData);
      })
      .catch((error) => seterrors(error.message));
  }, [postId]);

  const handleDelete = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      {errors && <h1>Error: {errors}</h1>}
      <div className="">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default CommentList;
