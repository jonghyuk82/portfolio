import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emptyImage from "../../images/web-project-2.jpg";
import { Link } from "react-router-dom";

function ProjectSingle({ repo, index }) {
  const { name, displayName, url, imgUrls } = repo;
  // const { projectName, projectDisplayName, imgUrls } = projects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 1,
      }}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        {imgUrls.length > 0 ? (
          <img src={`${imgUrls[0]}`} alt="" className="rounded-xl" />
        ) : (
          <img src={emptyImage} alt="" className="rounded-xl" />
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{displayName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link>
            <button className="btn btn-outline btn-primary">Demo</button>
          </Link>
          <Link to={url}>
            <button className="btn btn-outline btn-accent">Code</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectSingle;
