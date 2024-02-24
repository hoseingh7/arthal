import logo from "./logo.svg";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Header from "./component/header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/create"
          element={<Create />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
