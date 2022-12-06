import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhonePage from "./pages/PhonePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iphone-14" element={<PhonePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
