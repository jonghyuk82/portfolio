import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import personImage from "../images/personImage.jpg";

function Banner() {
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);
  const centerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState(localStorage.theme);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1280) {
      smallImageRef.current.style.display = "flex";
      smallImageRef.current.style.justifyContent = "center";
      largeImageRef.current.style.display = "none";

      centerRef.current.style.display = "flex";
      centerRef.current.style.justifyContent = "center";
      centerRef.current.style.alignItems = "center";
    } else {
      smallImageRef.current.style.display = "none";
      largeImageRef.current.style.display = "flex";
    }
  }, [windowWidth]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="px-10 pt-10 lg:px-40 lg:px-20 xl:px-40 xl:px-20 2xl:px-40 2xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={centerRef}
        className="flex"
      >
        <div className="flex flex-row justify-center">
          <div className="lg:basis-3/4 xl:basis-3/4 2xl:basis-3/4">
            <div className="flex flex-col" ref={centerRef}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 0.1,
                }}
                ref={smallImageRef}
                className="mb-10"
              >
                <img
                  src={personImage}
                  alt=""
                  className="justify-center item-center py-0 px-0 w-60 h-60 rounded-full"
                />
              </motion.div>
              <div className="basis-1/4">
                <div></div>
              </div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="mb-3 text-sm justify-between"
              >
                Hi, my name is
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 0.8,
                }}
                className="text-4xl font-bold mb-5"
              >
                Jonghyuk Lee
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 1.2,
                }}
                className="text-lg font-semibold text-gray-400 mb-2"
              >
                I'm a Full-Stack Software Engineer.
              </motion.h1>

              <div className="text-fuchsia-500 mb-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.9,
                    delay: 1.9,
                  }}
                >
                  I'm software engineer specializing in building exceptional
                  digital experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.9,
                    delay: 1.9,
                  }}
                >
                  Currently, I'm foucused on building warehouse management
                  products at
                  {activeTheme === "light" ? (
                    <span className="font-semibold text-black">
                      {" "}
                      Alinxsoft.
                    </span>
                  ) : (
                    <span className="font-semibold text-black">
                      {" "}
                      Alinxsoft.
                    </span>
                  )}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 2.4,
                }}
                className="flex sm:block"
              >
                <a
                  download="Jonghyuk_John_Lee_Resume.pdf"
                  href="/downloads/Jonghyuk_John_Lee_Resume.pdf"
                  className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                  <span className="text-sm sm:text-lg font-general-medium duration-100">
                    Download CV
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            ref={largeImageRef}
            className="basis-1/4 justify-center item-center"
          >
            <img
              src={personImage}
              alt=""
              className="justify-center item-center w-96 h-60 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Banner;
