const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      //   const newTheme = state.theme === "light" ? "dark" : "light";
      //   localStorage.setItem("theme", newTheme);
      //   document.querySelector("html").setAttribute("data-theme", newTheme);
      //   return { ...state, theme: newTheme };
      return { ...state, theme: action.payload };
    case "GET_WINDOW_WIDTH":
      return { ...state, windowWidth: action.payload };
    default:
      return state;
  }
};

export default appReducer;
