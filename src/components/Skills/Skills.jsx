import "./Skills.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const Skills = () => {
  return (
    <div className="callout">
      <div className="toprow">
        <i className="infoicon fa-solid fa-circle-info"></i>
        <text className="notice">Notice</text>
      </div>
      <text className="para">
        These projects are available on my GitHub, to access them, you can click
        on the GitHub logo at the bottom left when you expand a card.
        <br />
        To see the deployment of the project, you can click on the image within
        the card in its shrinked form.
      </text>
      <div className=""></div>
    </div>
  );
};
