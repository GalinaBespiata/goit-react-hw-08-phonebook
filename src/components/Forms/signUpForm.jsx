import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
    if (evt.target.name === 'email') {
      setEmail(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    dispatch(register(user));
    reset();
  };

  const reset = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <form className={''} onSubmit={handleSubmit}>
      <label>
        <span className={''}>Name</span>
        <input
          className={''}
          value={name}
          type="text"
          name="name"
          minLength={2}
          maxLength={15}
          required
          onChange={handleInputChange}
        />
      </label>
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
        SignUp
      </button>
    </form>
  );
};
