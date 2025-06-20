import "./Notice.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const Notice = () => {
  return (
    <div className="callout" id="notice">
      <div className="toprow">
        <i className="infoicon fa-solid fa-circle-info"></i>
        <text className="notice">Notice</text>
      </div>
      <text className="para">
        All projects are available on <strong>my GitHub</strong>, which can be
        accessed when you click the GitHub logo{" "}
        <strong>on the left after you expand a card</strong> using the See
        Project button.
        <br />
        To see the <strong>deployment</strong> of the project, similarly, you
        can click the icon <strong>below</strong> the GitHub logo after
        expanding a card.
      </text>
      <div className=""></div>
    </div>
  );
};
