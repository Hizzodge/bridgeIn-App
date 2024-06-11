import { FC } from "react";

interface UserCardProps {
  name: string;
  email: string;
  id: number;
  onClick?: () => void;
}

const UserCard: FC<UserCardProps> = ({ name, email, id, onClick }) => {
  return (
    <div
      key={id}
      className="flex flex-col m-2 bg-neutral-200 border-neutral-300 w-295 p-5 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ease-in-out"
      onClick={onClick}
    >
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
