import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
