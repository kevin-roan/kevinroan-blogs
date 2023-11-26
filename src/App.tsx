import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "firebase/compat/auth";
import { Header, Footer, AdminLogin, BlogViewer } from "./components";
import { Admin, Home } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useState, useEffect } from "react";
import { app } from "./Helpers/firebaseHelper";

export interface User {
  uid: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((authUser) => {
      if (authUser !== null) {
        setUser(authUser as User);
      } else {
        console.log("Admin not LoggedIn");
      }
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
