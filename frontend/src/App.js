import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Reset } from "styled-reset";
import axios from "axios";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Us from "./pages/Us";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:3001/click");
      setMessage(response.data.message);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/us" element={<Us />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
