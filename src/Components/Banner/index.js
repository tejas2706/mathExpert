import React, { useState, useEffect } from 'react';
import './styles.css';
import mathQuotes from '../../mathQuotes.js';
import RotatingCube from '../RotatingCube';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {Fade, Slide } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DidYouKnow from '../../assets/didyouknow.jpg'

function Banner() {
  const [quoteDetails, setquoteDetails] = useState(
    mathQuotes[Math.ceil(Math.random() * 5)],
  );
  const [open, setOpen] = useState(false)
  const [factsModalOpened, setFactsModalOpened] = useState(false)


  // useEffect(() => {
  //     function changeQuote(){
  //         setTimeout(() => {
  //             let randomQuoteNumber = Math.ceil(Math.random()*5);
  //             setquoteDetails(mathQuotes[randomQuoteNumber === quoteDetails.quoteId ?
  //                 quoteDetails.quoteId - 1 ? quoteDetails.quoteId - 1 : quoteDetails.quoteId + 1 :
  //                 randomQuoteNumber])
  //         }, 10000);
  //         return;
  //     }
  //     changeQuote()
  // }, [quoteDetails])

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubscriptionContent = () => {
    return (
      <div className="getStarted">
        <h1 className="getStarted__title">Get started on the journey of learning <span className="getStarted__mathematics">Mathematics</span>.</h1>
        <p className="getStarted__text1">Everything You Need. For an Unbeatable Price.</p>
        <div className="getStarted__buttons">
          <button className="getStarted_demoBtn" onClick={handleClose}>Try Demo</button>
          <button className="getStarted_purchaseBtn" onClick={handleClose}>Purchase</button>
        </div>
        <div className="getStarted_faq">Got questions? Check out our <Link to="/faq" onClick={handleClose}>FAQ</Link>.</div>
      </div>
    )
  }


  const FactsContent = () => {
    return (
      <>
        <div className="factsContent__upperContent">
          {/* <img src={DidYouKnow} width={200} height={200}/> */}
          <h1 className="factsContent__title">Here's your <span className="factContent__title__word">Fact</span> for the day.</h1>
        </div>
        <div className="factsContent__lowerContent">
          <p className="factsContent__text1">Did You Know ?  <WbIncandescentIcon fontSize="large" /></p>
          <p className="factsContent__text1">{quoteDetails.quote}.</p>
        </div>
      </>
    )
  }

  const getStartedModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className="banner__getStartedModal">
              <div className="banner__getStartedModal_title">
                <HighlightOffIcon onClick={() => handleClose()} />
              </div>
              <div className="banner__getStartedModal_Content">
                <SubscriptionContent />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>);
  }

  const factsModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={factsModalOpened}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Slide direction="down"in={factsModalOpened} mountOnEnter unmountOnExit>
            <div className="banner__getStartedModal">
              <div className="banner__getStartedModal_title">
                <HighlightOffIcon onClick={() => setFactsModalOpened(false)} />
              </div>
              <div className="banner__getStartedModal_Content">
                <FactsContent />
              </div>
            </div>
          </Slide>
        </Modal>
      </div>);
  }

  return (
    <div className="banner__container">
      <div className="banner__image">
        <div className="banner__imageTitle">
          <h2>Hit ↯ to explore the question of the day !!</h2>
        </div>
        <RotatingCube onClick={() => setFactsModalOpened(true)}/>
      </div>
      <div className="banner_tagLine">
        <h1>Prepare for the olympiads with Competitive Prep.</h1>
        <div className="banner_contentBoxes_vertical">
          <div className="banner_eachBox red_box">Learn</div>
          <DoubleArrowIcon style={{ transform: 'rotate(90deg)' }} />
          <div className="banner_eachBox yellow_box">Practice</div>
          <DoubleArrowIcon style={{ transform: 'rotate(90deg)' }} />
          <div className="banner_eachBox green_box">Assess</div>
        </div>
        <div className="banner_contentBoxes_horizontal">
          <div className="banner_eachBox red_box">Learn</div>
          <DoubleArrowIcon />
          <div className="banner_eachBox yellow_box">Practice</div>
          <DoubleArrowIcon />
          <div className="banner_eachBox green_box">Assess</div>
        </div>
        <button className="banner__getStartedBtn" onClick={handleOpen}>
          <span>Get Started</span>
        </button>
        {getStartedModal()}
        {factsModal()}
      </div>
      {/* <div className="banner__quotes">
                <p></p>
                <h3 className="banner__quote">{quoteDetails.quote}</h3>
                <h4 className="banner__author">-- {quoteDetails.author}</h4>
            </div> */}
    </div>
  );
}

export default Banner;
