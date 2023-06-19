import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectSingle from "./ProjectSingle";
import GithubContext from "../../context/GithubContext";
import AppContext from "../../context/AppContext";

function ProjectGrid() {
  const { projects, dispatch } = useContext(GithubContext);
  const { windowWidth } = useContext(AppContext);

  console.log(windowWidth);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.15 }}
      className="py-5 sm:py-10 mt-10 sm:mt-16"
    >
      <div className="text-center">
        <p className="text-3xl font-medium">Projects portfolio</p>
      </div>
      <div className="flex border-b border-primary-light mt-10"></div>

      <div className="flex justify-center mt-5 sm:mt-10">
        {windowWidth < 1025 ? (
          <div className="grid grid-cols-1 mt-6 gap-10">
            {projects.map((project, index) => (
              <ProjectSingle key={project.id} repo={project} index={index} />
            ))}
          </div>
        ) : (windowWidth >= 1025) & (windowWidth < 1540) ? (
          <div className="grid grid-cols-2 mt-6 gap-10">
            {projects.map((project, index) => (
              <ProjectSingle key={project.id} repo={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 mt-6 gap-10">
            {projects.map((project, index) => (
              <ProjectSingle key={project.id} repo={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default ProjectGrid;
