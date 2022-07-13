import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/TopBar/Topbar";
import { Container, GlobalStyles } from "./AppStyles";
import HomePage from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
