import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.css";
import { Card } from "./components/Card/Card";

export const App = () => {
  return (
    <div className="home" id="home">
      <div className="main">
        <div className="about" id="about">
          <div className="div">Hi! My name is Ted.</div>

          <p className="welcome-to-the">
            <span className="text-wrapper-4">Welcome to the portfolio of</span>

            <span className="text-wrapper-5">
              {" "}
              {"{"}
              {"{"} Ted {"}"}
              {"}"}
            </span>

            <span className="text-wrapper-4">, I specialise in </span>

            <span className="text-wrapper-5">App & Web Dev</span>

            <span className="text-wrapper-4">, </span>

            <span className="text-wrapper-5">AI/ML</span>

            <span className="text-wrapper-4"> and </span>

            <span className="text-wrapper-5">UI/UX design</span>

            <span className="text-wrapper-4">
              . I enjoy {"{"}
              {"{"} integrating software and hardware {"}"}
              {"}"} to create products that solve{" "}
            </span>

            <span className="text-wrapper-5">real world problems</span>

            <span className="text-wrapper-4">, make processes more </span>

            <span className="text-wrapper-5">efficient and low effort</span>

            <span className="text-wrapper-4">, and functional yet </span>

            <span className="text-wrapper-5">aesthetically pleasing</span>

            <span className="text-wrapper-4">.</span>
          </p>
        </div>
        <div className="content" id="projects">
          <div className="title">
            <div className="text-wrapper-6">SST Inc</div>
          </div>

          <div className="column">
            <Card
              title="SST Open House App 2024 (IOS/Android)"
              description="I am one of the lead developers for this app which was used during SST's Open House event."
              imageUrl="fa-solid fa-door-open"
              imageSrc={"/src/assets/SSTOH2024.png"}
              link={
                "https://apps.apple.com/us/app/sst-open-house-2024/id6479939416"
              }
              github={"https://github.com/tedydevmac/openhouseapp2024.git"}
            />
            <Card
              title="ASPA (IOS/Android)"
              description="This was my 2023 Serve project which I worked on until 2024"
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/src/assets/ASPA.png"}
              github={"https://github.com/tedydevmac/aspa.git"}
            />
            <Card
              title="SST Virtual Tour (Web)"
              description="This was my 2024 Serve project which I am still working on"
              imageUrl="fa-solid fa-school"
              imageSrc={"/src/assets/virtualtour.png"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
            />
            <Card
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features to the app and improved its UI during its revamp in 2023"
              imageUrl="fa-solid fa-school"
              imageSrc={"/src/assets/sstannouncer.png"}
              link={
                "https://play.google.com/store/apps/details?id=com.sst.anouncements&pcampaignid=web_share"
              }
              github={"https://github.com/tedydevmac/SST-Announcer-flutter.git"}
            />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">Competitions / Events</div>
          </div>

          <div className="column">
            <Card
              title="RAYdar - SUTD What The Hack 2024"
              description="An AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups"
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/src/assets/RAYdar.png"}
              link={"https://devpost.com/software/raydar-8dh1xi"}
              github={"https://github.com/tedydevmac/RAYdar.git"}
            />
            <Card
              title="Student Helper Bot - ARTC-SST Innovation Camp"
              description="A Telegram bot to assist students in their school work management"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/src/assets/telegram.webp"}
              link={"https://github.com/tedydevmac/studenthelp.git"}
              github={"https://github.com/tedydevmac/studenthelp.git"}
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
