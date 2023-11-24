import "./App.css";
import { Header, Footer, AdminLogin, BlogViewer } from "./components";
import { Admin, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/viewblog" element={<BlogViewer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
