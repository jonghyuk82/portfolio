import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import personImage from "../../images/personImage.jpg";
import { FiBox } from "react-icons/fi";

const AboutBio = () => {
  return (
    <div>
      <div className="w-full">
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img
              src={personImage}
              alt="Jonghyuk Lee"
              className="rounded-lg w-60"
            />
          </div>

          <div className="w-full sm:w-3/4 text-left">
            <p className="mb-4 text-ternary-dark text-md">
              <p>
                Hello, I'm Jonghyuk Lee, a passionate software engineer with a
                focus on web and desktop development . With a background in
                Computer Science and several years of industry experience, I
                have had the opportunity to work on diverse projects and
                contribute to cutting-edge technologies.{" "}
              </p>
              <p>
                I specialize in both front-end and back-end development, using
                various skills to build scalable, robust, and maintable
                software. Throughout my career, I thrive on solving complex
                problems and creating seamless user experiences. In addition to
                my technical skills, I believe in the power of teamwork and
                effective communication. I have worked in agile environments,
                collaborating closely with cross-functional teams to deliver
                high-quality software solutions on time and within budget.{" "}
              </p>
              <p>
                I would love to connect and discuss potential opportunities or
                collaborations. Feel free to reach out to me. Thank you for
                visiting my portfolio!
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
