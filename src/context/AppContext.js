import React, { useReducer, useState, useEffect } from "react";
import { createContext } from "react";
import appReducer from "./AppReducer";

const initialState = {
  theme: "light",
  windowWidth: window.innerWidth,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch({ type: "TOGGLE_THEME" });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: "GET_WINDOW_WIDTH",
        payload: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
