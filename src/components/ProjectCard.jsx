const ProjectCard = ({ data, university }) => {
  return (
    <div className="flex justify-around rounded-md drop-shadow-lg bg-[#adc4ce] m-2">
      <div className="p-2">
        <p>
          <b>PID:</b> {data.pid}
        </p>
        <h3>
          <b>ProjectName:</b> {data.projectName}
        </h3>
        <h3>
          <b>University:</b> {data.university}
        </h3>
        <h3>
          <b>Domain:</b> {data.university}
        </h3>
        <h3>
          <b>Technology Used:</b> {data.university}
        </h3>
        <h3>
          <b>TeamMember(s):</b> {data.teamMember}
        </h3>
        <h1>
          <b>Description:</b> {data.description}
        </h1>
      </div>
      <div className="p-2">
        {university && (
          <button className="bg-[#adc4ce] p-2 mb-2 rounded-md drop-shadow-lg">
            Accept Project
          </button>
        )}
        <video className="mt-1" controls>
          <source src="/" type="video/mp4" />
          Your Browser Dosen't support video player
        </video>
      </div>
    </div>
  );
};

export default ProjectCard;
