import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './styles.css';

function GoogleLogOutComponent({logout}) {
    return (
        <div>
            <GoogleLogout
                clientId="655782473072-alk3hsc0ju3ka6ec8b6iqkv1mdm2cr6m.apps.googleusercontent.com"
                // buttonText="Logout"
                render={renderProps => (
                    <div className="navbar__loginBtn" onClick={renderProps.onClick}>
                        Logout
                    </div>
                )}
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
        </div>
    )
}

export default GoogleLogOutComponent
