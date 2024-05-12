import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import Loader from './Loader';
import {
  Modal,
  ModalNav,
  ModalNavItem,
  WelcomeWrapper,
} from './AuthPage.styled';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <WelcomeWrapper>
      <ToastContainer />
      <Modal>
        <ModalNav>
          <ModalNavItem to="/auth/register">Register</ModalNavItem>
          <ModalNavItem to="/auth/login">Log In</ModalNavItem>
        </ModalNav>

        {id === 'register' && <RegisterForm />}
        {id === 'login' && <LoginForm />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Modal>
    </WelcomeWrapper>
  );
};

export default AuthPage;
