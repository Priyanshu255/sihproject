import React from "react";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const AcceptProjects = () => {
  return (
    <>
      <TopBar pageName="AcceptProjects" />
      <h1 className="p-4 font-medium bg-[#96b6c5]">
        Projects to be reviwed uploaded by the students.
      </h1>
      <div className="projects grid grid-cols-2 grid-flow-row ">
        {projectData.map((item, index) => (
          <ProjectCard key={index} data={item} university={true}/>
        ))}
      </div>
    </>
  );
};

export default AcceptProjects;
