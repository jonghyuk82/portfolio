export const updateTheme = (currentTheme) => {
  localStorage.getItem("theme", currentTheme);
  const newTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  document.querySelector("html").setAttribute("data-theme", newTheme);
  return newTheme;
};
