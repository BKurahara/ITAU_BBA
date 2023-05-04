import "./App.css";
import { IntlProvider } from "react-intl";
import Home from "./routes/Home";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
