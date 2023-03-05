import { useEffect } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';

import { Loader } from 'Loader/Loader';

import { useSelector } from 'react-redux';

import { UserMenu } from '../components/userMenu/UserMenu';

import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';
import { refreshCurrentUser } from 'redux/auth/operationsAuth';

const LazyHomePage = lazy(() => import('pages/HomePage'));
const LazyContactPage = lazy(() => import('pages/ContactPage'));
const LazySignUpPage = lazy(() => import('pages/SignUpPage'));
const LazySignInPage = lazy(() => import('pages/SignInPage'));

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(refreshCurrentUser());
  }, [dispatch, isLoggedIn]);

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
                flexDirection: 'column',
                gap: '10px',
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
                <li
                  style={{
                    border: '2px solid #893996',
                    borderRadius: '10px',
                    padding: '3px',
                  }}
                >
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li
                  style={{
                    border: '2px solid #893996',
                    borderRadius: '10px',
                    padding: '3px',
                  }}
                >
                  <NavLink to={'/contacts'}>Contacts</NavLink>
                </li>
              </ul>
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <ul style={{ display: 'flex', flexDirection: 'row' }}>
                  <li>
                    <NavLink to={'/register'}>Register</NavLink>
                  </li>
                  <span>/</span>
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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />

            <Route path="/register" element={<LazySignUpPage />} />
            <Route path="/login" element={<LazySignInPage />} />

            <Route path="/contacts" element={<LazyContactPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
