import './App.css'
import { Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Header from "./components/Header";
import Home from './components/Home';
import Detail from "./components/Detail";
import Watchlist from './components/Watchlist';
import Movies from './components/Movies';
import Series from './components/Series';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/home" element={ <Home/>} />
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/watchlist/:userid" element={<Watchlist/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/series" element={<Series/>}></Route>
      </Routes>
    </div>
  )

}
export default App;

