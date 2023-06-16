const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    case "GET_PROJECTLISTS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
