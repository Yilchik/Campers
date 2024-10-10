import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import CatalogPage from "./pages/CatalogPage/CatalogPage";
// import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} /> */}
    </Routes>
    // </Router>
  );
}

export default App;
