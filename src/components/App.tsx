import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "../Pages/Home";
import Game from "../Pages/Game";
import Winner from "../Pages/Winner";
import NotFound from "../Pages/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="winner" element={<Winner />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
