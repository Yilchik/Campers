import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<DetailsPage />}>
        <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
