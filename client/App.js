import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import Routes from "./Routes";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../public/styles";

import { ThemeProvider } from '@mui/material/styles'
import {theme} from '../public/styles'

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
=======
    <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
    </ThemeProvider>
>>>>>>> main
    </div>
  );
};

export default App;
