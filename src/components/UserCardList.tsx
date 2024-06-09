import { FC } from "react";
import UserCard from "./UserCard";

interface UserCardListProps {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
}

const UserCardList: FC<UserCardListProps> = ({ users }) => {
  return (
    <div className="flex flex-wrap justify-center mt-7">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default UserCardList;
