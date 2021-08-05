import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MathExpertLogo from '../../assets/mainLogo.svg';


function Navbar() {
  const [navBgShow, setnavBgShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setnavBgShow(true);
      } else {
        setnavBgShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const openNav = () => {
    document.getElementById('sidenav').style.width = '50%';
  };

  const closeNav = () => {
    document.getElementById('sidenav').style.width = 0;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classForModal = {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const onModalClick = () => {
    console.log('aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    setOpen(true);
  };

  return (
    <div
      className={`navbar__container ${
        navBgShow && 'navbar__container_withBg'
      }`}>
      <div id="sidenav" className="navbar__sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <h4 className="navbar__item">What is MathsExpert ?</h4>
        <h4 className="navbar__item">
          <Link to="/content">Content</Link>
        </h4>
        <h4 className="navbar__item">
          <Link className="navbar__item" to="/aboutUs">About Us</Link>
        </h4>
        <h4 className="navbar__item">FAQ's</h4>
      </div>
      <div className="navbar__hamburger" onClick={openNav}>
        ☰
      </div>
      <Link to="/">
        <h2 className="navbar__title">MathExpert</h2>
      </Link>
      <div className="navbar__items">
        <h4 className="navbar__item">What is MathsExpert ?</h4>
        <h4 className="navbar__item">
          <Link className="navbar__item" to="/content">Content</Link>
        </h4>
        <h4 className="navbar__item">
          <Link className="navbar__item" to="/aboutUs">About Us</Link>
        </h4>
        <h4 className="navbar__item">
          <Link className="navbar__item"to="/faq">FAQ's</Link>
        </h4>
      </div>
      <Link to="/login">
        <button className="navbar__loginBtn">Login</button>
      </Link>
      {open && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classForModal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
            <Fade in={open}>
              <div className="authentincation_modal">
                <div className="authentincation_modal_container">
                  <div className="authentincation_modal_tab">
                    <HighlightOffIcon onClick={() => handleClose()} />
                  </div>
                  <div className="authentincation_modal_content">
                    <h1>Login via</h1>
                    <div className="authentincation_modal_google">Google</div>
                    <h3>Or</h3>
                    <div className="authentincation_modal_facebook">
                      Facebook
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Navbar;
