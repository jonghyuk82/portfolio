import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectSingle from "./ProjectSingle";
import GithubContext from "../../context/GithubContext";
import { getRepos } from "../../context/GithubAction";

function ProjectGrid() {
  const { projects, dispatch } = useContext(GithubContext);

  console.log(projects);

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
      <div className="flex border-b border-primary-light dark:border-secondary-dark mt-10"></div>

      <div className="flex justify-center mt-5 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {/* {Array.from({ length: 10 }).map((_, index) => (
            <ProjectSingle key={index} keyIndex={index} />
          ))} */}
          {projects.map((project, index) => (
            <ProjectSingle key={project.id} repo={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectGrid;
