import Logo from '../logo/Logo';
import SigninWithButton from '../signin-with-button/SigninWithButton';
import GoogleIcon from './../../icons/Google.svg?react';
import GithubIcon from './../../icons/Github.svg?react';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Logo />
      <h3>Log in to your account</h3>
      <div>
        <SigninWithButton
          icon={<GoogleIcon />}
          label='Google'
        />
        <SigninWithButton
          icon={<GithubIcon />}
          label='Github'
        />
        <input type='email' placeholder='Work email' />
      </div>
        <button type='submit' onClick={() => console.log('clicked')}>
          Log in to Qencode
        </button>
        <div>
          Is your company new to Qencode? <a href='#'>Sign up</a>
        </div>
    </div>
  );
}

export default App;
