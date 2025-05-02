import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AllRoutes from "./router/Routes";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="flex-1 bg-gray-100 p-4">
          <AllRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
