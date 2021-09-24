import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import LoginForm from "./Component/LoginForm";
import Header from "./Component/Header";
import ProtectedRoute from "./Component/ProtectedRoute";
import "./App.css";
import SignUpForm from "./Component/SignUpForm";
import ForgotPassword from "./Component/ForgotPassword";

function App() {
  return (
    <>
      <Header />
      <div className="App-container">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}
export default App;
