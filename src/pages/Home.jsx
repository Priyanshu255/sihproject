import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { TextField, IconButton } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();
  return (
    <>
      <TopBar pageName="Home" login={!auth.organistion} logout={auth.organistion}/>
      <div className="flex">
        <div className="flex-col justify-center w-full ">
          <div className="flex mt-2">
            <TextField
              sx={{ width: 740, m: 1 }}
              label="Search"
              variant="filled"
              size="small"
            />
            <div>
              <div className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <SearchIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Search</b></h1>
              </div>
            </div>
            <div>
              <Link to="/filter" className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <FilterAltIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Filter</b></h1>
              </Link>
            </div>
            <Link to="/help">
              <div className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <HelpIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>FAQ</b></h1>
              </div>
            </Link>
            <div>
              <div className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <InfoIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Info</b></h1>
              </div>
            </div>
          </div>
          <div className="projects grid grid-cols-2 grid-flow-row ">
            {projectData.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
        </div>
        {/* <div className="w-[450px] bg-[#adc4ce] m-2 p-2">
          <div className="m-2 p-2 bg-[#96b6c5]">
            <h1 className="text-lg pb-2 underline">
              <b>Top Universities</b>
            </h1>
            <h1 className="font-medium">Medi-Caps University</h1>
            <h1>⭐⭐⭐⭐⭐</h1>
            <button className="bg-[#adc4ce] p-2 m-1 rounded-md drop-shadow-md">
              <Link to="/university">Show Projects</Link>
            </button>
            <h1 className="font-medium">IIT Indore</h1>
            <h1>⭐⭐⭐⭐⭐</h1>
            <button className="bg-[#adc4ce] p-2 m-1 rounded-md drop-shadow-md">
              Show Projects
            </button>
          </div>
          <div className="m-2 p-2 bg-[#96b6c5]">
            <h1 className="text-lg pb-2 underline">
              <b>Top Mentors</b>
            </h1>
            <h1 className="font-medium">Dr. Pramod S. Nair</h1>
            <h1 className="font-medium">Dr. Kailash Bandhu</h1>
            <h1 className="font-medium">Dr. Nitika Vats Doohan</h1>
            <h1 className="font-medium">Mr. Sanket Gupta</h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
