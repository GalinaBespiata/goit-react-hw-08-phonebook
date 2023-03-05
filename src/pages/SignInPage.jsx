import { useEffect } from 'react';
import { SignInForm } from 'components/Forms/SignInForm';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export default function SignInPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  });
  return (
    <>
      <section>
        <div>
          <h4
            style={{
              padding: '10px',
            }}
          >
            Enter your login or click Register
          </h4>
          <SignInForm />
        </div>
      </section>
    </>
  );
}
