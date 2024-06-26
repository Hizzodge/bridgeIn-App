import { FC } from "react";

interface HeaderProps {
  placeholder: string;
  onChangeHandler: (event: { target: { value: string } }) => void;
}

const Header: FC<HeaderProps> = ({
  placeholder,
  onChangeHandler,
}: HeaderProps) => {
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler({ target: { value: event.currentTarget.value } });
  };

  return (
    <div className="bg-red-700 p-4  text-black text-center rounded-lg">
      <input
        className="border-none outline-none p-2.5 w-46 leading-7.5 mb-7.5 rounded-lg text-center"
        style={{ WebkitAppearance: "none" }}
        placeholder={placeholder}
        onChange={handleClick}
      />
    </div>
  );
};

export default Header;
