import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectSingle from "./ProjectSingle";

function ProjectGrid() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 3 }}
      className="py-5 sm:py-10 mt-5 sm:mt-10"
    >
      <div className="text-center">
        <p className="text-3xl font-medium">Projects portfolio</p>
      </div>
      <div className="flex border-b border-primary-light dark:border-secondary-dark mt-10"></div>

      <div className="flex justify-center mt-5 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProjectSingle key={index} keyIndex={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectGrid;
