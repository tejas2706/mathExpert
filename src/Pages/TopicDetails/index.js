import React, { useState, useEffect } from 'react';
import SubTopics from '../../Components/SubTopics';
import DifficultyLevels from '../../Components/DifficultyLevels';
import './styles.css';
import Hexagon from '../../Components/Hexagon';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsCard from '../../Components/QuestionsCard';
import service from '../../service/apiService';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loader from './loader.gif';

function renderHexagons(
  difficultyLevel,
  questionsArray,
  additionalDataForDisplay,
) {
  let allQuestions =
    questionsArray &&
    questionsArray.map((eachQues, i) => { 
      return (
        <QuestionsCard
          question={{ i, eachQues }}
          classForColor={difficultyLevel}
          additionalDataForDisplay={additionalDataForDisplay}
        />
      );
    });
  return allQuestions;
}

function TopicDetails({
  match,
  standard,
  topicId,
  topicName,
  subTopicName,
  questionsArr,
  setSubTopicName,
  setQuestionsArr,
}) {
  const [subTopics, setSubtopics] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState('easy');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [open, setOpen] = useState(false);

  const onSubTopicClick = (subTopic) => {
    setSubTopicName(subTopic.name);
    setQuestionsArr(subTopic.questions);
    setFilteredQuestions(
      _.filter(subTopic.questions, {
        difficulty: difficultyLevel,
      }),
    );
    handleClose();
  };

  useEffect(() => {
    service
      .get(`http://localhost:8000/api/v1/mathexp/topicDetails/${topicId}`)
      .then(({ data }) => {
        console.log(
          '/////////////////// ~ file: index.js ~ line 46 ~ service.get ~ data',
          data,
        );
        setSubtopics(data.subTopics);
        setSubTopicName(data.subTopics[0].name);
        setQuestionsArr(data.subTopics[0].questions);
        setFilteredQuestions(
          _.filter(data.subTopics[0].questions, {
            difficulty: difficultyLevel,
          }),
        );
      });
  }, [topicId]);

  const handleDifficultyLevelChange = (difficulty, questions) => {
    setFilteredQuestions(
      _.filter(questions, {
        difficulty: difficulty,
      }),
    );
    setDifficultyLevel(difficulty);
  };

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

  const modal = (type) => {
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
            <div className="showSubmissions__container">
              <div className="sketchFieldComponent__modal_title">
                <h3>Subtopics</h3>
                <HighlightOffIcon onClick={() => handleClose()} />
              </div>
              <div className="subTopics__modal">
                <SubTopics
                  subTopics={subTopics}
                  onSubTopicClick={onSubTopicClick}
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <>
      {!_.isEmpty(subTopics) ? (
        <div className="topicDetails__container">
          <div className="topicDetails__subTopics">
            <div className="topicDetails__topicName">
              <h1>
                {topicName}
                {standard}
              </h1>
            </div>
            <div className="topicDetails__listSubTopics">
              <SubTopics
                subTopics={subTopics}
                onSubTopicClick={onSubTopicClick}
                subTopicName={subTopicName}
              />
            </div>
          </div>
          <div className="topicDetails__questionContainer">
            <div className="topicDetails__subTopicTitle">
              <h2>{subTopicName}</h2>

              <div
                className="topicDetails__subTopicTitle__dropdown"
                onClick={handleOpen}>
                <i className="arrow down"></i>
              </div>
            </div>

            <DifficultyLevels
              handleDifficultyLevelChange={handleDifficultyLevelChange}
              questionsArr={questionsArr}
            />
            <div className="topicDetails__questions">
              {renderHexagons(difficultyLevel, filteredQuestions, {
                subTopicName: subTopicName,
              })}
            </div>
            <br />
            <div className="topicDetails__topicTest">
              <Link to="/quiz">
                <button className="topicDetails__testBtn">Take Test</button>
              </Link>
            </div>
          </div>
          <div>{modal()}</div>
        </div>
      ) : (
        <div className="topicDetails__container_loaderPage loader"><img className="loader_gif" src={loader}></img></div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    standard: state.selectedFieldsReducer.standard,
    topicName: state.selectedFieldsReducer.topicDetails.topicName,
    topicId: state.selectedFieldsReducer.topicDetails.topicId,
    subTopicName: state.selectedFieldsReducer.subTopicName,
    questionsArr: state.selectedFieldsReducer.questionsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSubTopicName: (subTopicName) =>
      dispatch({
        type: 'SET_SUBTOPIC',
        payload: { subTopicName: subTopicName },
      }),
    setQuestionsArr: (questionsArr) =>
      dispatch({ type: 'SET_QUESTIONS', payload: { questions: questionsArr } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetails);
