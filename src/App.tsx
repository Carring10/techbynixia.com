import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Article } from "./components/Article/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:slug" element={<Article />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
