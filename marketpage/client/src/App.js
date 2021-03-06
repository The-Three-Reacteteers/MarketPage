import MarketPage from "./components/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <>
    <MarketPage />
    <Router>
      <Route exact path="/" component={HomePage} /> 
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Router>
    </>
  );
}

export default App;