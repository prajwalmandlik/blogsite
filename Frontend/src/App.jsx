import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Context, server } from "./main";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SetNewBlog from "./pages/SetNewBlog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser, user } =
    useContext(Context);

  useEffect(() => {
    axios
      .get(`${server}/user/me`, {
        withCredentials: true,
      })
      .then((res) => {
        const userData = res.data.user;
        setIsAuthenticated(true);
        setUser(userData);
      })
      .catch((error) => {
        const userData = { email: "" };
        setIsAuthenticated(false);
        setUser(userData);
      });
  }, [isAuthenticated]);

  return (
    <>
      <Router scrollRestoration="auto">
        <Header />
        <Box pt={14} mb={30} ml={["auto", "auto", "17rem"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/new" element={<SetNewBlog />} />
          </Routes>
        </Box>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
