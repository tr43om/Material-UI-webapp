import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: purple,
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
