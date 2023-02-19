import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ListingDetails from "./Components/ListingDetails";
import { AuthProvider } from "./store/AuthContext";

function App() {

  return (
    <>
    <AuthProvider>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
