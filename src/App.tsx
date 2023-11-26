import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "firebase/compat/auth";
import { Header, Footer, AdminLogin, BlogViewer } from "./components";
import { Admin, Home } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useState, useEffect } from "react";
import { app, db } from "./Helpers/firebaseHelper";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewblog" element={<BlogViewer />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route element={<PrivateRoutes isAdmin={user} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
