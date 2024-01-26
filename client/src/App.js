import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import CreateEvent from "./pages/CreateEvent";
import RegisterEvent from "./pages/RegisterEvent";
import AllEvent from "./pages/AllEvent";
import CollegeEvent from "./pages/CollegeEvent";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/event/register" element={<RegisterEvent />} />
          <Route path="/event/all" element={<AllEvent />} />
          <Route path="/event/college" element={<CollegeEvent />} />
          <Route path="/event/details" element={<EventDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
