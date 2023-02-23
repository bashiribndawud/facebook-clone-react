import React from 'react'
import './Widget.css'
const Widget = ({ img, title, text }) => {
  return (
    <div className="Widget">
      <img src={img} />
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Widget