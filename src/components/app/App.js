import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import LocationAndContact from '../locationAndContact/LocationAndContact';
import StatisticsDashboard from '../statisticsDashboard/StatisticsDashboard';
import ActiveAndArchived from '../activeAndArchived/ActiveAndArchived';
import ClientProducts from '../activeAndArchived/clientProducts/ClientProducts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* ========== Alisher Sodiqov ========= */}
        <Route path='/location/contact' element={<LocationAndContact />} />
        <Route path='/dashboard/statistic' element={<StatisticsDashboard />} />
        <Route path='/active/archived' element={<ActiveAndArchived />} />
        <Route path='/client/active/archived' element={<ClientProducts />} />
        {/* ========== Alisher Sodiqov ========= */}

      </Routes>
    </>
  );
}

export default App;
