import React, { useState, useEffect } from 'react';
import './styles.css';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import GoogleLoginComponent from '../../Components/GoogleLoginComponent';
import server from '../../service/apiService';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Login({ setIsLoggedIn }) {

  const [login, setLogin] = useState(false);
  const [loginFailed, setloginFailed] = useState(false);

  const responseSuccess = (data) => {
    server
      .post(`http://localhost:8000/api/v1/mathexp/users/google`, { tokenId: data.tokenId })
      .then((responseData) => {
        localStorage.setItem('jwt_token', responseData.data);
        setLogin(responseData.data.user);
        setIsLoggedIn(responseData.data.user);
        return responseData
      })
      .catch((error) => {
        setloginFailed(true);
      })
  }

  const responseFailure = () => {
    setloginFailed(true);
  }

  return (
    <div className="login__container">
      {login ? <Redirect push to="/content"></Redirect> : null}
      <div className="login__action__section">
        <div className="login__action__container">
          <div className="login__action__companyname">
            <LaptopChromebookIcon style={{ fontSize: "80px" }} />
            <h1>Math Expert</h1>
          </div>
          <div className="login__action__header">
            <h1>Sign in to your account</h1>
          </div>
          {loginFailed ? <div className="login__error">Something went wrong , Please try again !!</div> : null}
          <div className="login__action__inputs">
            <input
              type="text"
              placeholder="Email Address"
              className="login__action__emailInput"
            />
          </div>
          <div className="login__action__inputs">
            <input
              type="password"
              placeholder="Password"
              className="login__action__passwordInput"
            />
          </div>
          <div className="login__btn">Login</div>
          <br></br>
          {/* <h3> OR </h3> */}
          <div className="login__third__party">
            <GoogleLoginComponent responseSuccess={responseSuccess} responseFailure={responseFailure} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.selectedFieldsReducer.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  //TODO: MOVE actions into the separate file 
  return {
    setIsLoggedIn: (login) => dispatch({ type: "SET_IS_LOGGEDIN", payload: { isLoggedIn: login } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);