import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import LocationAndContact from '../locationAndContact/LocationAndContact';
import StatisticsDashboard from '../statisticsDashboard/StatisticsDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/location/contact' element={<LocationAndContact />} />
        <Route path='/dashboard/statistic' element={<StatisticsDashboard />} />
      </Routes>
    </>
  );
}

export default App;
