import React, { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "firebase/compat/auth";
import { Admin, Home } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useState, useEffect } from "react";
import { app } from "./Helpers/firebaseHelper";

// lazy loading

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AdminLogin = lazy(() => import("./components/AdminLogin"));
const BlogViewer = lazy(() => import("./components/BlogViewer"));

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
      <Suspense fallback={<> Loading...</>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewblog/:id" element={<BlogViewer />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route element={<PrivateRoutes isAdmin={user} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
