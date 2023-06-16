import React from "react";
import Banner from "../components/Banner";
import ProjectGrid from "../components/projects/ProjectGrid";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Banner />
      <ProjectGrid />
      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <button>More Projects</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
