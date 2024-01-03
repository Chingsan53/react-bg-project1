import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Javascript",
    level: "ntermediate",
    color: "yellow",
  },
  {
    skill: "React",
    level: "advance",
    color: "green",
  },
  {
    skill: "C++",
    level: "intermediate",
    color: "cyan",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "blue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one skill component for each 
          web dev skill that you have, customized with 
  props */}
        <SkillList />
      </div>
    </div>
  );
}

// Avatar or profile picture component
const Avatar = () => {
  return <img className="avatar" src="img/chingsan.jpg" alt="chingsan Ly" />;
};

// Introduction component
const Intro = () => {
  return (
    <div>
      <h1>Chingsan Ly</h1>
      <p>
        Front-end web developer and a senior at California State University,
        Fullerton. I like playing video games, badminton, and sightseeing.
      </p>
    </div>
  );
};

// Skill Lists component
const SkillList = () => {
  return (
    <div className="skill-list">
      {
        skills.map(skill=><Skill skill={skill.skill} color={skill.color} level={skill.level}/>)
      }
    </div>
  );
};

const Skill = ({skill, color, level}) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
        {level === "advance" && "🖕"}
      </span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
