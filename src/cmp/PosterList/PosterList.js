import React from "react";
import "./PosterList.css";
import RowPosterSmall from "../RowPosterSmall/RowPosterSmall";
import RowPoster from "../RowPoster/RowPoster";

const smallRow = (list) => 
  list.map((item, key) => 
    <RowPosterSmall key={key} name={item.name} img={item.img} />
)


const largeRow = (list) => 
  list.map((item, key) => 
    <RowPoster key={key} name={item.name} img={item.img} />
)

const PosterList = ({ titleSection, typeSection, list }) => {
  return (
    <div className="row">
      <h2>{titleSection}</h2>
      <div className='row__posters'>
        {typeSection === "small" ? smallRow(list) : largeRow(list)}
      </div>
    </div>
  );
};

export default PosterList;
