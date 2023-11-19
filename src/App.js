// require('dotenv').config()
import './App.css';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Routes ,Route ,useNavigate} from 'react-router-dom';

//components
import Navbar from './components/navbar';

//pages
import User from './pages/User';
import Status from './pages/Status';
import Priority from './pages/Priority';

//context
import { GOContext } from './Context/GoContext';


function App() {
  const navigate = useNavigate();
  const {go,Setgo} = useContext(GOContext);

  useEffect(()=>{
     navigate(`/${go.Group}`)
  },[go]);

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" >
            <Route path={`user`} element={<User/>} />
            <Route path={`status`} element={<Status/>} />
            <Route path={`priority`} element={<Priority/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
