import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import "./App.css";
import Navigation from "./routes/Navigation";
import Posts from "./routes/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
}

export default App;
