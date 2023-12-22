import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="React" emoji="👨🏻‍💻" color="yellow" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Next.js" emoji="👶" color="orange" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
