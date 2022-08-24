import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvide } from "./contexts/CartContext";
import { Router } from "./Routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyles/>
      <BrowserRouter>
        <CartContextProvide>
          <Router/>
        </CartContextProvide>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
