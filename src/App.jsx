import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./root/RootLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* RootLayout  */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
