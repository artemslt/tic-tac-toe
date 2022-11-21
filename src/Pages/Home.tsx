import React from "react";
import { ChoosePlayer } from "../components/ChoosePlayer/ChoosePlayer";
import { useDispatch } from "react-redux";
import { firstPlayer } from "../redux/plaeyrSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  function handlePlayerX(): void {
    dispatch(firstPlayer(true));
  }

  function handlePlayerO(): void {
    dispatch(firstPlayer(false));
  }

  return (
    <main>
      <ChoosePlayer
        handlePlayerX={handlePlayerX}
        handlePlayerO={handlePlayerO}
      />
    </main>
  );
};

export default Home;
