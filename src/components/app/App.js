import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import LocationAndContact from '../locationAndContact/LocationAndContact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/location/contact' element={<LocationAndContact />} />
      </Routes>
    </>
  );
}

export default App;
