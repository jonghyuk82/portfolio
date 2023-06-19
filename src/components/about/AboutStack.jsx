import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaAws,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import { TbSql, TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiAzuredevops,
  SiVisualstudio,
} from "react-icons/si";
import csharpLogo from "../../images/icons8-c-sharp-logo-50.png";

const AboutStack = () => {
  const { windowWidth } = useContext(AppContext);
  return (
    <div className="text-center">
      <p className="text-3xl font-medium mt-20">Tech stacks</p>
      {windowWidth < 860 ? (
        <div className="mt-10 bg-zinc-50 shadow-sm flex justify-center items-center">
          <div className="container flex flex-col mx-auto py-20 block justify-center items-center text-4xl">
            <FaHtml5 className="mb-5" />
            <FaCss3 className="mb-5" />
            <FaReact className="mb-5" />
            <FaAngular className="mb-5" />
            <SiJavascript className="mb-5" />
            <SiTypescript className="mb-5" />
            <TbSql className="mb-5" />
            <img src={csharpLogo} alt="C Sharp" className="w-12 mb-5"></img>
            <FaAws className="mb-5" />
            <SiAzuredevops className="mb-5" />
            <FaGithub className="mb-5" />
            <FaGit className="mb-5" />
            <SiVisualstudio className="mb-5" />
            <TbBrandVscode className="mb-5" />
          </div>
        </div>
      ) : (
        <div className="mt-5 sm:mt-10 bg-zinc-50 shadow-sm sm:flex sm:justify-between items-center">
          <div className="container mx-auto py-20 block sm:flex sm:justify-between items-center text-4xl">
            <FaHtml5 />
            <FaCss3 />
            <FaReact />
            <FaAngular />
            <SiJavascript />
            <SiTypescript />
            <TbSql />
            <img src={csharpLogo} alt="C Sharp" className="w-12"></img>
            <FaAws />
            <SiAzuredevops />
            <FaGithub />
            <FaGit />
            <SiVisualstudio />
            <TbBrandVscode />
          </div>
        </div>
      )}

      {/* <div className="flex border-b border-primary-light mt-10"></div> */}
      {/* <div className="mt-5 sm:mt-10 bg-zinc-50 shadow-sm sm:flex sm:justify-between items-center">
        {windowWidth < 860 ? (
          <div className="container mx-auto py-20 block sm:flex sm:justify-between items-center text-4xl">
            <FaHtml5 />
            <FaCss3 />
            <FaReact />
            <FaAngular />
            <SiJavascript />
            <SiTypescript />
            <TbSql />
            <img src={csharpLogo} alt="C Sharp" className="w-12"></img>
            <FaAws />
            <SiAzuredevops />
            <FaGithub />
            <FaGit />
            <SiVisualstudio />
            <TbBrandVscode />
          </div>
        ) : (
          <div className="container mx-auto py-20 block sm:flex sm:justify-between items-center text-4xl">
            <FaHtml5 />
            <FaCss3 />
            <FaReact />
            <FaAngular />
            <SiJavascript />
            <SiTypescript />
            <TbSql />
            <img src={csharpLogo} alt="C Sharp" className="w-12"></img>
            <FaAws />
            <SiAzuredevops />
            <FaGithub />
            <FaGit />
            <SiVisualstudio />
            <TbBrandVscode />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default AboutStack;
