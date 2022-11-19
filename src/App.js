
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import RestaurantsBar from './pages/restaurants&bar/RestaurantsBar';
import Spa from './pages/spa/Spa';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant' element={<RestaurantsBar/>}/>
        <Route path='/spa' element={<Spa/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
