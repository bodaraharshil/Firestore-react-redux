import React from "react";

const Projectsummary = ({item}) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-context grey-text text-darken-3">
          <span className="card-title">{item.title}</span>
          <p>{item.content}</p>
          <p className="grey-text">3 september ,2010</p>
        </div>
      </div>
    </div>
  );
};

export default Projectsummary;
