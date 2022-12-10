import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import Iphone14Page from "./pages/Iphone14Page";
import PhonePage from "./pages/PhonePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iphone-14-pro" element={<PhonePage />} />
          <Route path="/iphone-14" element={<Iphone14Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
