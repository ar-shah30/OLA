import React from "react";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Registeration from "./pages/Registeration";
import ClientDashboard from "./pages/ClientDashboard";
import LawyerDashboard from "./pages/LawyerDashboard";
import EnterEmail from "./pages/Login/ForgetPassword/EnterEmail";
import ChangePassword from "./pages/Login/ForgetPassword/ChangePassword";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Registeration />} />
            <Route exact path="/register" element={<Registeration />} />
            <Route exact path="/client/*" element={<ClientDashboard />} />
            <Route exact path="/client" element={<Navigate to="/client/clientprofile" replace />}/>
            <Route exact path="/lawyer/*" element={<LawyerDashboard />} />
            <Route exact path="/lawyer" element={<Navigate to="/lawyer/lawyerprofile" replace />}/>
            <Route exact path="/enteremail" element={<EnterEmail />} />
            <Route exact path="/changepassword" element={<ChangePassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
