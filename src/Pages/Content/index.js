import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';
import classesAndExams from './classesAndExams';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import service from '../../service/apiService';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const mapping = {
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
}

function Content({ setStandard, setTopicDetails, isLoggedIn, standard = null }) {
  const [std, setstd] = useState(standard || '6');
  const [topics, setTopics] = useState(null);
  useEffect(() => {
    setStandard(std);
    service
      .get(`http://localhost:8000/api/v1/mathexp/contents/?standard=${std}`)
      .then(({ data }) => {
        setTopics(data.topics);
      });
  }, [std, setStandard]);

  const handleChange = (event) => {
    setstd(event.target.value);
    setStandard(std);
  };
  return (
    <div className="content__container">
      <div className="content__classDropDown">
        <h1>Select Class</h1>
        {/* <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={std}
            onChange={handleChange}>
            {classesAndExams.map((each) => {
              return <MenuItem value={each.class}>{each.class}</MenuItem>;
            })}
          </Select>
        </FormControl> */}
        <div className="content__classesDisplay">
          {classesAndExams.map((each) => {
            return <div className="content__eachClass"
              value={std}
              onClick={handleChange}
            >STD &nbsp;<img className="content__eachClass_img" src={mapping[each.class]}></img></div>;
          })}
        </div>
      </div>
      <div className="content__examsDisplay">
        <div className="content__selectClass">Exams for class {std}</div>
        <div className="content__line"></div>
        <div className="content__exams">
          {classesAndExams
            .filter((each) => each.class == std)[0]
          ['examIds'].map((eachExam, index) => {
            return (
              <div className={`content__eachExam content_examExam_${index}`}>
                <div className="flip-card">
                  {eachExam}
                  {/* <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            {eachExam}
                                        </div>
                                        <div class="flip-card-back">
                                            Show exam details here..
                                        </div>
                                    </div> */}
                </div>
              </div>
            )
          })
          }
        </div>
        <div className="content__topicTitle">Maths preparation for the above exams for class {std}</div>
        {/* <div className="content__line"></div> */}
        <div className="content__topics">
          {
            topics && topics.length ?
              topics.map((eachTopic, index) => {
                return (
                  <Link to={{
                    pathname: `/topicDetails`
                  }}>
                    <div className={`content__eachTopic content__eachTopic_${index % 4}`} onClick={() => setTopicDetails({
                      topicId: eachTopic._id,
                      topicName: eachTopic.name
                    })}>
                      <h3 className="content__eachTopic_title">{eachTopic.name}</h3>
                      {
                        eachTopic.subTopics.map((each) => {
                          return (
                            <div className="content_topic">
                              <ArrowRightIcon /> &nbsp;{each.name}
                            </div>
                          )
                        })
                      }
                    </div>
                  </Link>
                )
              }) : null
          }

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    standard: state.selectedFieldsReducer.standard,
    isLoggedIn: state.selectedFieldsReducer.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  //TODO: MOVE actions into the separate file 
  return {
    setStandard: (std) => dispatch({ type: "SET_STD", payload: { standard: std } }),
    setTopicDetails: (topicDetails) => dispatch({ type: "SET_TOPIC_DETAILS", payload: { details: topicDetails } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
