import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in.component';
import { AuthenticationContainer , SwitchButton, Link} from './authentication.styles';
import { useState } from 'react';

const Authentication = () => {
  const [Switch, setSwitch] = useState(false);

  const onClickHandler = () => {
    setSwitch(!Switch);
  }

  const smallScreen = window.screen.width <= 480 ? true:false;
  return (
    <>
    {
      smallScreen ? 
    <AuthenticationContainer>
      {Switch ? <SignUpForm /> : <SignInForm /> }
      <Link>
      {Switch ? <>Login in to your Account</> : <>Don't have an account?</> }
      <SwitchButton onClick={onClickHandler}>{Switch ? "login" : "register"}</SwitchButton>
      </Link>
    </AuthenticationContainer> 
    :
    <AuthenticationContainer>
      <SignUpForm /> 
      <SignInForm />
    </AuthenticationContainer>
    }
    </>
  );
};

export default Authentication;