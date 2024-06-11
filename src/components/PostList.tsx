import { FC, useState, useEffect } from "react";
import Post from "./Post";
import CommentList from "./CommentList";
import close from "../assets/close.svg";

interface PostListProps {
  userId: number;
}

const PostList: FC<PostListProps> = ({ userId }) => {
  const [posts, setPosts] = useState<
    { id: number; title: string; body: string }[]
  >([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((postsData) => setPosts(postsData));
    console.log(`Fetching posts for userId: ${posts}`, posts);
  }, [posts, userId]);

  const handlePostClick = (postId: number) => {
    setSelectedPostId(selectedPostId === postId ? null : postId);
  };

  const onCloseCommentsHandler = () => {
    setSelectedPostId(null);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            onClick={() => handlePostClick(post.id)}
          />
          {selectedPostId === post.id && (
            <>
              <div className="bg-neutral-400 my-5 p-4 text-black text-center rounded-lg flex justify-between px-5">
                <h2>Comments</h2>
                <button className="" onClick={onCloseCommentsHandler}>
                  <img className="stroke-white" src={close} />
                </button>
              </div>
              <CommentList postId={post.id} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
