import { FC } from "react";

interface HeaderProps {
  placeholder: string;
  onChangeHandler?: () => void;
}

const Header: FC<HeaderProps> = ({
  placeholder,
  onChangeHandler,
}: HeaderProps) => {
  return (
    <div className="bg-red-700 p-4 text-white text-center rounded-lg">
      <input
        className="border-none outline-none p-2.5 w-46 leading-7.5 mb-7.5 rounded-lg text-center"
        style={{ WebkitAppearance: "none" }}
        placeholder={placeholder}
        onClick={onChangeHandler}
      />
    </div>
  );
};

export default Header;
