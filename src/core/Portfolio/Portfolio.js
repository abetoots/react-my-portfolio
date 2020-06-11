import React from "react";
import Header from "../../components/Header/Header";
import SkillSummary from "../../components/SkillSummary/SkillSummary";
import Projects from "../../components/Projects/Projects";

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <Header />
      <main style={{ padding: "1rem" }}>
        <SkillSummary />
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
