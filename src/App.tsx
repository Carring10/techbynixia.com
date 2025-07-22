import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Article } from "./components/Article/Article";
import { ArticleList } from "./components/ArticleList/ArticleList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:slug" element={<Article />}></Route>
          <Route path="/posts" element={<ArticleList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
