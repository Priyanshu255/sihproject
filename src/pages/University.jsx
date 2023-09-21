import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import PersonIcon from "@mui/icons-material/Person";

const University = () => {
  return (
    <div>
      <TopBar pageName="University Dashboard" logout="true" />
      <div className="flex">
        <div className="w-[400px]  m-2 p-3 bg-[#96b6c5]">
          <h1 className="font-bold text-lg">Profile</h1>
          {/* <img src="/"  height="100px" alt="Profile Picture"/> */}
          <div className="bg-[#adc4ce] p-2 mb-5 m-2 w-[120px]" >
            <PersonIcon sx={{ fontSize: "100px" }} />
          </div>
          <h1><b>University:</b> Medi-Caps University</h1>
          <h1><b>UniversityID: </b> AD1234</h1>
          <h1><b>EmailID:</b> mail@gmail.com</h1>
          <h1><b>Contact:</b> 000-111-222</h1>
          <h1><b>Projects Uploaded:</b> 6</h1>
          <h1><b>Projects Accepted:</b> 2</h1>
          <h1><b>Projects Pending:</b> 4</h1>
        </div>
        <div className="w-full m-2 p-3 bg-[#96b6c5]">
          <div className="relative mb-7">
            <h1 className="text-lg">
              <b>University Projects</b>
            </h1>
            <Link to="/acceptproject" className="absolute right-[130px] top-0 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">
              Accept Projects
            </Link>
            <Link to="/uploadproject" className="absolute right-0 top-0 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">
              Upload Projects
            </Link>
          </div>
          <div className="projects">
            {projectData.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default University
