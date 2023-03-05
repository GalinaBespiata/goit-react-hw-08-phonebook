import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { selectLogin } from 'redux/auth/selectorsAuth';

export function UserMenu() {
  const dispatch = useDispatch();
  const loginName = useSelector(selectLogin);
  return (
    <div>
      <p>Hello, {loginName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
