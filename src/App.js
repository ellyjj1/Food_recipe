import Navbar from "./components/navbar/navbar";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/detials/details";
import Favorites from "./pages/favorites/favorites";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/recipe-item/:id" element={<Details/>}/>
        </Routes>

      </div>

    </div>
  );
}

export default App;
