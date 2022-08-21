import React from 'react';
import Header from '../../components/Header/Header';
import SkillSummary from '../SkillSummary/SkillSummary';
import Projects from '../Projects/Projects';

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <Header />
      <main style={{ backgroundColor: '#e2e8f0' }}>
        <div style={{ padding: '1rem', maxWidth: '1080px', margin: '0 auto' }}>
          <SkillSummary />
          <Projects />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
