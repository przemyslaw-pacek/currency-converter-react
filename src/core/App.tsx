import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Form from "../Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Form />
    </ThemeProvider>
  );
}

export default App;
