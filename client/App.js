import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import Routes from "./Routes";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../public/styles";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
