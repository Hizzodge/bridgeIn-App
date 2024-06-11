import { FC, useState, useEffect } from "react";
import Comment from "./Comment";

interface CommentListProps {
  postId: number;
}

const CommentList: FC<CommentListProps> = ({ postId }) => {
  const [comments, setcomments] = useState<
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
        setcomments(commentsData);
      })
      .catch((error) => seterrors(error.message));
  }, [postId]);

  console.log("comments", postId);
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
          />
        ))}
      </div>
    </>
  );
};

export default CommentList;
