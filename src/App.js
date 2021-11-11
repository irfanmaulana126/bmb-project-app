import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import Home from "./pages/Home";
import PricingPages from "./pages/PricingPages";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/pricing' component={PricingPages}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
  </Router>
  );
}

export default App;
