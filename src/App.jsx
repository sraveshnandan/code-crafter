import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./root/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* RootLayout  */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
