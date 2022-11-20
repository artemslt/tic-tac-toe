import { ChoosePlayer } from "../components/ChoosePlayer/ChoosePlayer";
import { useDispatch } from "react-redux";
import { firstPlayer } from "../redux/plaeyrSlice";

const Home = () => {
  const dispatch = useDispatch();
  function handlePlayerX(): void {
    dispatch(firstPlayer(true));
  }

  function handlePlayerO(): void {
    dispatch(firstPlayer(false));
  }

  return (
    <div>
      <ChoosePlayer
        handlePlayerX={handlePlayerX}
        handlePlayerO={handlePlayerO}
      />
    </div>
  );
};

export default Home;