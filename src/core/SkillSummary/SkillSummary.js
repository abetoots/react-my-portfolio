import React from 'react';
import './SkillSummary.scss';
import Skill from './Skill/Skill';

const SkillSummary = (props) => (
	<div className="SkillSummary">
		<h2>Skill Summary</h2>
		<div className="SkillSummary__list">
			<div className="SkillSummary__listItem">
				<h3>Languages</h3>
				<Skill> Javascript (ES6)</Skill>
				<Skill> NodeJS</Skill>
				<Skill> HTML5</Skill>
				<Skill> CSS3</Skill>
				<Skill> PHP7</Skill>
			</div>

			<div className="SkillSummary__listItem">
				<h3>Frameworks & Libraries</h3>
				<Skill> React</Skill>
				<Skill> Express</Skill>
				<Skill> Redux w/ Redux Thunk</Skill>
				<Skill> Gatsby</Skill>
				<Skill> GraphQL</Skill> <Skill> jQuery</Skill>
			</div>

			<div className="SkillSummary__listItem">
				<h3>Tools</h3>
				<Skill> SASS/SCSS</Skill>
				<Skill> WordPress</Skill>
				<Skill> Webpack</Skill>
			</div>
		</div>
	</div>
);

export default SkillSummary;
