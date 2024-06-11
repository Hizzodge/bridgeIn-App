import { FC } from "react";
import UserCard from "./UserCard";

interface UserCardListProps {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
  onUserClick: (userId: number) => void;
}

const UserCardList: FC<UserCardListProps> = ({ users, onUserClick }) => {
  return (
    <div className="flex flex-wrap justify-center mt-7">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          id={user.id}
          onClick={() => onUserClick(user.id)}
        />
      ))}
    </div>
  );
};

export default UserCardList;
