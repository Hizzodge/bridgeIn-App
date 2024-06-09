//it will have Header component and users

import { FC, useState, useEffect } from "react";
import Header from "../components/Header";
import UserCardList from "../components/UserCardList";

const Home: FC = () => {
  const [searchString, setSearchString] = useState("");
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const onSearchChange = (event: { target: { value: string } }) => {
    const inputString = event.target.value.toLowerCase();
    setSearchString(inputString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
  }, [users, searchString]);

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
      <UserCardList users={filteredUsers} />
    </>
  );
};

export default Home;
