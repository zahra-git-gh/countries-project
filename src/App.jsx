import { Header } from "./components/Header/Header";
import "./App.css";
import { DetailsPage } from "./pages/DetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
