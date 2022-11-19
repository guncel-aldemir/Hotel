
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import RestaurantsBar from './pages/restaurants&bar/RestaurantsBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant' element={<RestaurantsBar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
