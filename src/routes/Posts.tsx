import { FC, useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching posts");
        }
        return response.json();
      })
      .then((postsData) => setPosts(postsData))
      .catch((error) => setError(error.message));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        return response.json();
      })
      .then((usersData) => setUsers(usersData))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      <h1 className="bg-red-700 p-4 text-black text-center rounded-lg text-[18px] h-[76px] flex items-center justify-center">
        All Posts
      </h1>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return (
          <div key={post.id} className="my-5 bg-neutral-100 p-5 rounded-lg">
            <h1>Title: {post.title}</h1>
            <h3>Posted by: {user?.name}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
