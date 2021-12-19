import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import CRoutes from "./config/Routes";
import CompHeader from "./components/Header/Header";
import CompFooter from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <CompHeader />
            <CRoutes />
            <CompFooter/>
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
