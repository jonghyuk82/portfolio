import { createContext, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { getProjectLists } from "./GithubAction";

const GithubContext = createContext();

export const GithubProvier = ({ children }) => {
  const initialState = {
    repos: [],
    projects: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    // const fetchRepos = async () => {
    //   try {
    //     const response = await getRepos();
    //     const sortedData = sortDataById(response);
    //     dispatch({ type: "GET_REPOS", payload: sortedData });
    //   } catch (error) {
    //     console.log("Loading error");
    //   }
    // };

    const fetchProjectLists = async () => {
      try {
        const response = await getProjectLists();
        dispatch({ type: "GET_PROJECTLISTS", payload: response });
      } catch (error) {}
    };
    // fetchRepos();

    fetchProjectLists();
  }, []);

  const sortDataById = (data) => {
    const sortedData = [...data].sort((a, b) => {
      return b.id - a.id;
    });

    return sortedData;
  };

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
