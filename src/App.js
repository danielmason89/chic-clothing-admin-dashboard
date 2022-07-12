import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/TopBar/Topbar";
import { GlobalStyles } from "./AppStyles";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
