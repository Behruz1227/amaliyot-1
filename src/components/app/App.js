import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
