import React, { useEffect } from "react";
import Navbar from "./components/Navbar/index";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { loadCart } from "./store/cart";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../public/styles";

const App = () => {
  // load saved guest cart when window re-opened.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart({}));
  }, []);

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

// test
