import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"; // Header contendo NavBar
//import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <Header /> {/* NavBar será parte do Header */}
      <AppRoutes />
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
