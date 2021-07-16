import React from 'react';
import GoogleLogin from 'react-google-login';
import './styles.css';

function GoogleLoginComponent({ responseSuccess, responseFailure }) {
    return (
        <GoogleLogin
            clientId="655782473072-alk3hsc0ju3ka6ec8b6iqkv1mdm2cr6m.apps.googleusercontent.com"
            render={renderProps => (
                <div className=" login__btn login__via__google" onClick={renderProps.onClick}>
                    Login with Google
                </div>
            )}
            // className="hello"
            buttonText="Login"
            onSuccess={responseSuccess}
            onFailure={responseFailure}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginComponent
