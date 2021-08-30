import "./App.css"
import WelcomePage from "./pages/WelcomePage"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Whole = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Whole>
      <Router>
        <WelcomePage />
      </Router>
    </Whole>
  )
}

export default App
