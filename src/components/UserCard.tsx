import React, { FC } from "react";

interface UserCardProps {
  name: string;
  email: string;
  id: number;
}

const UserCard: FC<UserCardProps> = ({ name, email, id }) => {
  return (
    <div
      key={id}
      className="flex flex-col m-2 bg-neutral-200 border-neutral-300 p-5 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ease-in-out"
    >
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
