import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import CRoutes from "./config/Routes";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <CRoutes />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
