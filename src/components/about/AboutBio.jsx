import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import personImage from "../../images/personImage.jpg";

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

          <div className="font-general-regular w-full sm:w-3/4 text-left">
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Hello, I'm Jonghyuk Lee, a passionate software engineer with a
              focus on web and desktop development . With a background in
              Computer Science and several years of industry experience, I have
              had the opportunity to work on diverse projects and contribute to
              cutting-edge technologies. I specialize in both front-end and
              back-end development, using JavaScript, HTML, and CSS to build
              intuitive and responsive user interfaces. I am proficient in
              frameworks like React and Angular, and have experience with
              backend technologies such as C#. Throughout my career, I have
              collaborated on various successful projects, including POS system,
              warehouse management system, and mobile-responsive websites. I
              thrive on solving complex problems and creating seamless user
              experiences. In addition to my technical skills, I believe in the
              power of teamwork and effective communication. I have worked in
              agile environments, collaborating closely with cross-functional
              teams to deliver high-quality software solutions on time and
              within budget. I am constantly expanding my skill set and keeping
              up with the latest industry trends. I hold a Bachelor's degree in
              Computer Science from Queens College. When I'm not coding, I enjoy
              exploring new hiking trails, experimenting with new recipes in the
              kitchen, and contributing to open-source projects on GitHub. I
              would love to connect and discuss potential opportunities or
              collaborations. Feel free to reach out to me at
              jonghyuk82@gmail.com or connect with me on LinkedIn. Thank you for
              visiting my portfolio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
