import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.css";

export const App = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="about" id="about">
          <div className="div">Goh Min Wen, Ted</div>

          <p className="welcome-to-the">
            <span className="text-wrapper-4">
              Welcome to the extraordinary world of
            </span>

            <span className="text-wrapper-5">
              {" "}
              {"{"}
              {"{"} Your name {"}"}
              {"}"}
            </span>

            <span className="text-wrapper-4">
              , a versatile and imaginative artist who skillfully navigates the
              realms of{" "}
            </span>

            <span className="text-wrapper-5">product design</span>

            <span className="text-wrapper-4">, </span>

            <span className="text-wrapper-5">photography</span>

            <span className="text-wrapper-4"> and </span>

            <span className="text-wrapper-5">digital art</span>

            <span className="text-wrapper-4">
              . With a keen eye for detail and a relentless pursuit of
              innovation, {"{"}
              {"{"} Your name {"}"}
              {"}"} crafts captivating{" "}
            </span>

            <span className="text-wrapper-5">visual narratives</span>

            <span className="text-wrapper-4">, immersive </span>

            <span className="text-wrapper-5">digital realms</span>

            <span className="text-wrapper-4">, and functional yet </span>

            <span className="text-wrapper-5">
              aesthetically pleasing products
            </span>

            <span className="text-wrapper-4">.</span>
          </p>
        </div>

        <div className="content" id="projects">
          <div className="title">
            <div className="text-wrapper-6">Projects</div>
          </div>

          <div className="column">
            <img
              className="card"
              alt="Card"
              src="https://c.animaapp.com/jGvhNn27/img/-card.svg"
            />

            <img
              className="card"
              alt="Card"
              src="https://c.animaapp.com/jGvhNn27/img/-card-1.svg"
            />

            <img
              className="card"
              alt="Card"
              src="https://c.animaapp.com/jGvhNn27/img/-card-2.svg"
            />
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer className="footer-instance" />
      </div>
      <Sidebar className="navigation" />
    </div>
  );
};
export default App;
