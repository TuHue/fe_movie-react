import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import CRoutes from "./config/Routes";
import CompHeader from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <CompHeader />
            <CRoutes />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
