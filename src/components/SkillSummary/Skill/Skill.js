import React from "react";
import "./Skill.scss";
import PropTypes from "prop-types";

const Skill = props => <div className="Skill">{props.children}</div>;

Skill.propTypes = {
  children: PropTypes.string
};

export default Skill;
