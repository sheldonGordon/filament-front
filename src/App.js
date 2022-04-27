import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import {AccountList} from "./features/account/components/AccountList";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
            <Route exact path="/" element={<Accueil />}></Route>
            <Route path="/account/list" element={<AccountList />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
