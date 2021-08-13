
const selectedFields = (state = {}, action) => {
  switch (action.type) {
    case "SET_STD":
      state = { ...state, standard: action.payload.standard };
      break;
    case "SET_TOPIC_DETAILS":
      state = { ...state, topicDetails: { ...action.payload.details } };
      break;
    case "SET_SUBTOPIC":
      state = { ...state, subTopicName: action.payload.subTopicName };
      break;
    case "SET_QUESTIONS":
      console.log('/////////////////// ~ file: userSelected.js ~ line 16 ~ selectedFields ~ action.payload', action.payload);
      state = { ...state, questionsArr: action.payload.questions };
      break;
    case "SET_SELECTED_QUESTION_ID":
      state = { ...state, selectedQuestion: action.payload.questionId };
      break;
    case "SET_IS_LOGGEDIN":
      state = { ...state, isLoggedIn: action.payload.isLoggedIn };
      break;
    default:
      break;
  }
  return state;
};

export default selectedFields;
