import { Routes, Route } from "react-router-dom";
import { HomePage, PokemonDetailPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
    </Routes>
  );
}

export default App;
