import React from "react";
import { motion } from "framer-motion";

function ProjectSingle({ keyIndex }) {
  console.log(localStorage.getItem("theme"));
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
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt={`PROJECT ${keyIndex}`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-primary dark:btn dark:btn-outline dark:btn-success">
            Demo
          </button>
          <button className="btn btn-outline btn-accent">Code</button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectSingle;
