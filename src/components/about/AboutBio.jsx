import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import personImage from "../../images/personImage.jpg";

const AboutBio = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img
            src={personImage}
            alt="Jonghyuk Lee"
            className="rounded-lg w-48"
          />
        </div>

        <div className="font-general-regular w-full sm:w-3/4 text-left">
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
