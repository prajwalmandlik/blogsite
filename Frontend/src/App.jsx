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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/new" element={<SetNewBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
