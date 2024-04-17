// import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
             <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
