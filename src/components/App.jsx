import { useEffect } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserMenu } from '../components/userMenu/UserMenu';
import HomePage from 'pages/HomePage';
import ContactPage from 'pages/ContactPage';

import { useSelector } from 'react-redux';

import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';
import { refreshCurrentUser } from 'redux/auth/operationsAuth';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header
        style={{
          display: 'flex',
          gap: '15px',
          padding: '10px',
        }}
      >
        <div>
          <nav style={{ display: 'flex' }}>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                gap: '150px',
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  gap: '20px',
                }}
              >
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/contacts'}>Contacts</NavLink>
                </li>
              </ul>
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <ul style={{}}>
                  <li>
                    <NavLink to={'/register'}>Register</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/login'}>Login</NavLink>
                  </li>
                </ul>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />

          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </main>
    </>
  );
}
