import { SignUpForm } from 'components/Forms/signUpForm';

export default function SignUpPage() {
  return (
    <>
      <section>
        <div>
          <h4
            style={{
              padding: '10px',
            }}
          >
            You have to registration
          </h4>
          <SignUpForm />
        </div>
      </section>
    </>
  );
}
