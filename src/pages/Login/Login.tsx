import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthProvider';
import { Form } from 'components/Form/Form';
import { LoginSignUp } from 'Layouts/LoginSignUp/LoginSignUp';

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <LoginSignUp>
        <Form isSignUp={false} />
      </LoginSignUp>
    </>
  );
};

export { Login };
