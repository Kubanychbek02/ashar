import {Route, Routes} from 'react-router-dom'
// import { ROUTES } from './route-config';
import { Layout } from '../layout';
import Home from '../pages/home';
import Signin from '../components/Signin/Signin';
import Navbar from '../components/Navbar';
import { Projects } from '../pages';

function App() {
  return (
    <div>
      {/* <ToastContainer /> */}
        {/* <Route path='/auth/login' element={<LoginPage />} /> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App
