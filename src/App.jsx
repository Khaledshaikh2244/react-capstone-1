

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Browse from "./pages/Browse";
import Display from "./pages/Display" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
