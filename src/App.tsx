import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Header, Footer, AdminLogin, BlogViewer } from "./components";
import { Admin, Home } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useState, useEffect } from "react";

firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
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
