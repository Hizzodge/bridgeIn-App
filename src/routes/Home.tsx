import { FC, useState, useEffect } from "react";
import Header from "../components/Header";
import UserCardList from "../components/UserCardList";
import PostList from "../components/PostList";

const Home: FC = () => {
  const [searchString, setSearchString] = useState("");
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUserId, setSelectedUserId] = useState<number>(0);

  const onSearchChange = (event: { target: { value: string } }) => {
    const inputString = event.target.value.toLowerCase();
    setSearchString(inputString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [users, searchString]);

  return (
    <>
      <Header placeholder="choose a user" onChangeHandler={onSearchChange} />
      <UserCardList users={filteredUsers} onUserClick={setSelectedUserId} />
      {selectedUserId !== 0 && (
        <>
          <div className="bg-neutral-200 my-5 p-4 text-black text-center rounded-lg">
            <h2 className="">Posts</h2>
          </div>
          <PostList userId={selectedUserId} />
        </>
      )}
    </>
  );
};

export default Home;
