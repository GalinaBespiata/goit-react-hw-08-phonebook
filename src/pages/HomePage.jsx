import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h1>Congratulations! Your friends are waiting for your call!</h1>
        </div>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link
            to="/register"
            style={{
              border: '3px solid green',
              borderRadius: '50%',
              padding: '20px',
            }}
          >
            SignUp
          </Link>
          <Link
            to="/login"
            style={{
              border: '3px solid green',
              borderRadius: '50%',
              padding: '20px',
            }}
          >
            SignIn
          </Link>
        </ul>
      </section>
    </>
  );
}
