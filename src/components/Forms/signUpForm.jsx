import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import css from '../Forms/forms.module.css';

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
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <span className={css.span}>Name</span>
        <input
          className={css.input}
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
        <span className={css.span}>Email</span>
        <input
          className={css.input}
          value={email}
          type="email"
          name="email"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span className={css.span}>Password</span>
        <input
          className={css.input}
          value={password}
          type="password"
          name="password"
          minLength={7}
          maxLength={10}
          required
          onChange={handleInputChange}
        />
      </label>
      <button className={css.button} type="submit">
        SignUp
      </button>
    </form>
  );
};
