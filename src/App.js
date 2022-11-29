import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import {AccountList} from "./features/account/components/AccountList";
import {AccountAdd} from "./features/account/components/AccountAdd";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
            <Route exact path="/" element={<Accueil />}></Route>
            <Route path="/account/list" element={<AccountList />}></Route>
            <Route path="account/add" element={<AccountAdd />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
