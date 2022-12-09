import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import "./App.css"
import { StoreProvider } from "./store/StoreProvider"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
