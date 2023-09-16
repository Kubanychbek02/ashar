import {Route, Routes} from 'react-router-dom'
import { ROUTES } from './route-config';
import { Layout } from '../layout';

function App() {
  return (
    <div>
      {/* <ToastContainer /> */}
        {/* <Route path='/auth/login' element={<LoginPage />} /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          {ROUTES.map(i => <Route path={i.path} key={i.path} element={i.page} />)}
        </Route>
      </Routes>
    </div>
  );
}

export default App
