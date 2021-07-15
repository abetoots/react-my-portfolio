import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
	let description;
	if (Array.isArray(props.description)) {
		description = (
			<ul>
				{props.description.map((item) => (
					<li key={item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
		);
	} else {
		console.log('ell');
		description = <p>{props.description}</p>;
	}
	return (
		<div className="Project">
			<h3 className="Project__title">
				{props.title}
				<a className="Project__link" href={props.link} target="_blank" rel="noopener noreferrer">
					Visit <FontAwesomeIcon icon="globe" />
				</a>
			</h3>
			<figure>
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					<img src={props.src} />
				</a>
			</figure>
			<div className="Project__description">
				<h4>Description:</h4>
				{description}
			</div>
		</div>
	);
};

Project.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Project;
