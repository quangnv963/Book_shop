import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { SignGoogle } from '../api/auth';

const clientId = '143388628636-taki68o077r48hlvvtviosc84fd2qu45.apps.googleusercontent.com';

const LoginGoogle = () => {
  const onSuccess = (response) => {
    console.log('Login Success! User:', response);
    SignGoogle(response)
  };

  const onFailure = () => {
    console.log('Login Failed:');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-left items-center w-[1000px]">
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
          useOneTap
          containerProps={{
            className: 'w-full max-w-[474px]',
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginGoogle;
