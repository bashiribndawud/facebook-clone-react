import React from 'react'
import './Widget.css'
import Widget from '../Widget/Widget';
const Widgets = () => {
  return (
    <div className="Widgets">
      <Widget
        img="https://cdn.pixabay.com/photo/2020/09/01/19/58/woman-5536425__340.jpg"
        title="Action Movie"
        text="Action movie description"
      />
      <Widget
        img="https://cdn.pixabay.com/photo/2016/02/27/01/59/joker-1225051__340.jpg"
        title="Horror Movie"
        text="Horror movie description"
      />
    </div>
  );
}

export default Widgets