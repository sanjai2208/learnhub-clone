
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage"; // We will create this page next
import { StudentProvider } from "./context/StudentContext"; // Import the provider

const App = () => {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<AdminPage />} /> 
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
};

export default App;
