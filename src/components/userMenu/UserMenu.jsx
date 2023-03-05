import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { selectLogin } from 'redux/auth/selectorsAuth';

export function UserMenu() {
  const dispatch = useDispatch();
  const loginName = useSelector(selectLogin);
  return (
    <div>
      <h3 style={{ color: '#893996', margin: '5px' }}>Hello, {loginName}</h3>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        style={{
          backgroundColor: '#893996',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Logout
      </button>
    </div>
  );
}
