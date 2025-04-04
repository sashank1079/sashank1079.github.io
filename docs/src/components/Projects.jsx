import './Main.css';
const Projects = () => {
  const projects = [
    {
      title: "RAG Chat Assistant",
      description: "Built a Retrieval-Augmented Generation (RAG) chatbot using LangChain, Pinecone, and GPT-4. Features include semantic search with BERT-based chunking, efficient vector storage and parallel document processing.",
      githubLink: "https://github.com/sashank1079/RAG"
    },
    {
      title: "Phidata- an AI framework project",
      description:
        "Created various AI agents using the phidata framework; a video analyzer, a PDF assistant and a financial analyst assistant.",
      githubLink: "https://github.com/sashank1079/phidata",
    },
    {
      title: "CrewAI- an AI framework project",
      description:
        "Built a car dealer agent using the crewAI framework",
      githubLink: "https://github.com/sashank1079/demo-crew-ai",
    },
    {
      title: "IMDB Movies Data ETL & BI Reporting",
      description:
        "Built an end-to-end data pipeline using Talend Studio and Alteryx.",
      githubLink: "https://github.com/sashank1079/IMDB-ETL-Project",
    },
    {
      title: "Face Mask Detection using Keras and TensorFlow",
      description:
        "Developed a real-time face mask detection system using OpenCV for video stream processing.",
      githubLink: "https://github.com/sashank1079/IEEE-Xplore",
    },
    {
      title: "MBTA Tracker",
      description:
        "A web application utilizing the MBTA API to display upcoming train schedules for Boston's transit system.",
      githubLink: "https://github.com/sashank1079/MBTA-tracker",
    },
    {
      title: "Flight Delay Prediction",
      description:
        "Developed a machine learning model to predict flight delays using libraries like Pandas, NumPy, Seaborn, Matplotlib, and CatBoost.",
      githubLink: "https://github.com/sashank1079/prediction-flight-delays",
    },
    {
      title: "LA Crime Analysis",
      description:
        "Performed a comprehensive analysis of Los Angeles crime data using data visualization tools and statistical methods to identify trends, hotspots, and patterns.",
      githubLink: "https://github.com/sashank1079/LA-Crime-Analysis",
    },
    {
      title: "Tour Website",
      description:
        "Developed a responsive tour website with a user-friendly interface, showcasing various travel destinations and services.",
      githubLink: "https://github.com/sashank1079/my_Tour_Web",
    },
    {
      title: "Sports League Management",
      description:
        "Designed a comprehensive SQL database to manage sports league operations, including player registration, team management and performance tracking.",
      githubLink: "https://github.com/sashank1079/SportsLeagueMngmt",
    },
    
  ];
  
  
  
      return (
        <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <strong className="highlight">{project.title}</strong>
            <p className="subtext">{project.description}</p>
            <a
              href={project.githubLink}
              className="github-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#ffffff"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.173c-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.493.998.11-.775.418-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.305-.536-1.535.117-3.197 0 0 1.008-.323 3.3 1.233a11.56 11.56 0 0 1 6.003 0c2.292-1.556 3.3-1.233 3.3-1.233.653 1.662.241 2.892.118 3.197.77.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.626-5.475 5.923.43.37.814 1.1.814 2.22v3.293c0 .319.193.69.8.574C20.566 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
      );
};

export default Projects;
