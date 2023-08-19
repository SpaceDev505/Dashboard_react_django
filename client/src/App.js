import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SignIn from './pages/auth/signin';
import DashBoard from './pages/dashboard';
import SignUp from './pages/auth/signup';

function App() {
  return (
    <Routes>
      <Route path='/dash'  element = {<DashBoard />}/>
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/signup' element = {<SignUp />} />
    </Routes>
  );
}

export default App;
