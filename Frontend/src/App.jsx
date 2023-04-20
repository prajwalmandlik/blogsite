import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SetNewBlog from "./pages/SetNewBlog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router scrollRestoration="auto">
        <Header />
        <Box pt={14} mb={30}  ml={[4,"auto","17rem"]} >
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
