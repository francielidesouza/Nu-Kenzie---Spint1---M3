import { useState } from "react";
import HomePage from "./pages/HomePage/homePage";
import DashPage from "./pages/DashPage";
import "./styles/index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div>
      {currentPage === "" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "dashPage" && (
        <DashPage setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
