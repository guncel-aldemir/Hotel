
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import RestaurantsBar from './pages/restaurants&bar/RestaurantsBar';
import Spa from './pages/spa/Spa';
import Accommodation from './pages/accommodation/Accommodation';
import StandartRoom from './pages/rooms/standartRoom/StandartRoom';
import FamilyRoom from './pages/rooms/familyRoom/FamilyRoom';
import Activities from './pages/activities/Activities';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant' element={<RestaurantsBar/>}/>
        <Route path='/spa' element={<Spa/>}/>
        <Route path='/odalarimiz' element={<Accommodation/>}/>
        <Route path='/odalarimiz/standart' element={<StandartRoom/>}/>
        <Route path='/odalarimiz/aile' element={<FamilyRoom/>}/>
        <Route path='/aktiviteler' element={<Activities/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
