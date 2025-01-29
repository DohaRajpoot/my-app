import React from "react";
import Container from "@mui/material/Container";
import PostOrderForm from "./PostOrderForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define a dark yellow color for primary
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb300', // Dark yellow color
    },
    secondary: {
      main: '#f50057', // Optional: secondary color (you can change it too)
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <PostOrderForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
