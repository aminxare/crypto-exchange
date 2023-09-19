import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import CryptoList from "./features/crypto";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <CryptoList />
      </Container>
    </>
  );
}

export default App;
