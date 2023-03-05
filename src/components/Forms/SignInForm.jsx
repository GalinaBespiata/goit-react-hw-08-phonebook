import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';

export const SignInForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    if (evt.target.name === 'email') {
      setEmail(evt.target.value);
    }
    if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));
    reset();
  };

  const reset = () => {
    setPassword('');
    setEmail('');
  };

  return (
    <form className={''} onSubmit={handleSubmit}>
      <label>
        <span className={''}>Email</span>
        <input
          className={''}
          value={email}
          type="email"
          name="email"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span className={''}>Password</span>
        <input
          className={''}
          value={password}
          type="password"
          name="password"
          minLength={7}
          maxLength={10}
          required
          onChange={handleInputChange}
        />
      </label>
      <button className={''} type="submit">
        SignIn
      </button>
    </form>
  );
};
