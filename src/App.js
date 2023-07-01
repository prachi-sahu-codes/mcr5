import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipeDetail } from "./pages/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
