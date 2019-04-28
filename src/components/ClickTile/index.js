// export default ClickTile;
import React from "react";
import "./style.css";

function ClickTile(props) {
  return (
    <div className="card click-item">
      <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)}/>
    </div>
  );
}

export default ClickTile;
