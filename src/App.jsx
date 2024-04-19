import { Route, Routes } from 'react-router-dom';
import { MAIN, ADMIN_MAIN, USER_MAIN, SIGN_UP, LOGIN } from './constants/page_constants';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path={MAIN} element={<MainPage/>} />
        <Route path={USER_MAIN} element={<UserPage/>} />
        <Route path={ADMIN_MAIN} element={<AdminPage/>} />
        <Route path={SIGN_UP} element={<SignupPage/>} />
        <Route path={LOGIN} element={<LoginPage/>} />
      </Routes>
    </>
  );
}

export default App;
