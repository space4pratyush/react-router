import { Route } from "react-router-dom";
import Product from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
    </div>
  );
}

export default App;
