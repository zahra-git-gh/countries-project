import { Header } from "./components/Header/Header";
import "./App.css";
import { DetailsPage } from "./pages/DetailsPage";
// import { HomePage } from "./pages/HomePage";


function App() {

  return (
    <>
      <Header />
      {/* <HomePage/> */}
      <DetailsPage/>
    </>
  );
}

export default App;
