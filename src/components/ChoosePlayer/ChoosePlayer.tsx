import { OIcon, XIcon } from "../Icons/Icon.styled";
import { NavLink } from "react-router-dom";

interface PlayerProp {
  handlePlayerX(): void;
  handlePlayerO(): void;
}

export const ChoosePlayer = ({ handlePlayerX, handlePlayerO }: PlayerProp) => {
  return (
    <div className="mt-20 md:mt-16 w-[500px] flex flex-col items-center justofy-center mx-auto">
      <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8">
        <p className="text-md text-gray-300 uppercase font-semibold  md:text-xl ">
          Please Select
          {"  "}
          <span className="text-[#30c4bd] text-xl font-bold ">X</span>
          {"  "}
          or
          {"  "}
          <span className="text-[#f3b236] text-xl font-bold">O</span>
        </p>
        <div className="w-3/4 bg-gray-800  flex items-center justify-evenly h-24 rounded-2xl p-6 ">
          <NavLink
            onClick={handlePlayerX}
            className="focus:bg-gray-300 hover:bg-[#bcfefb] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
            to={"/game"}
          >
            <XIcon />
          </NavLink>
          <NavLink
            onClick={handlePlayerO}
            className="focus:bg-gray-300 hover:bg-[#ffe1a9] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 "
            to={"/game"}
          >
            <OIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
