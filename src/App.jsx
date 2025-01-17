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
              images={[
                "/src/assets/OH2024/OHMain.PNG",
                "/src/assets/OH2024/OHAndroid.jpeg",
                "/src/assets/OH2024/OHIOS.PNG",
              ]}
              title="SST Open House App 2024 (IOS/Android)"
              description="I am one of the lead developers for this app which was used during SST's Open House event."
              imageUrl="fa-solid fa-door-open"
              imageSrc={"/src/assets/logos/SSTOH2024.png"}
              link={
                "https://apps.apple.com/us/app/sst-open-house-2024/id6479939416"
              }
              github={"https://github.com/tedydevmac/openhouseapp2024.git"}
              iconHover={true}
              expanddesc={
                "Requested by teachers planning the Open House event, they wanted an app to be made to be integrated with the event activities, engage visitors and provide information about the school. My existing Project Serve team decided to take on this task alongside that year's Serve project. Although our schedules were extremely packed, we worked on it to our best ability despite time challenges. In the end the launch of the app was successful, and it ended up accumulating over 1000 users during event day, reaching Number 2 in Trending on the App Store."
              }
              tooBig={true}
              singleImage={false}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/ASPA.png"]}
              title="ASPA (IOS/Android)"
              description="This was my 2023 Serve project which I worked on until 2024"
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/src/assets/logos/ASPA.png"}
              link={"https://github.com/tedydevmac/aspa.git"}
              github={"https://github.com/tedydevmac/aspa.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/virtualtour.png"]}
              title="SST Virtual Tour (Web)"
              description="This was my 2024 Serve project which I am still currently working on"
              imageUrl="fa-solid fa-school"
              imageSrc={"/src/assets/logos/virtualtour.png"}
              link={"https://github.com/tedydevmac/virtualtour.git"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/sstannouncer.png"]}
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features to the app and improved its UI during its revamp in 2023"
              imageUrl="fa-solid fa-school"
              imageSrc={"/src/assets/logos/sstannouncer.png"}
              link={
                "https://play.google.com/store/apps/details?id=com.sst.anouncements&pcampaignid=web_share"
              }
              github={"https://github.com/tedydevmac/SST-Announcer-flutter.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/sstinc.png"]}
              title="SST Inc Camp 2024 Hackathon"
              description="A 1 day hackathon where we built a mobile app to spice up the game of TicTacToe"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/src/assets/logos/sstinc.png"}
              link={"https://github.com/tedydevmac/sstinccamp2024hackathon.git"}
              github={
                "https://github.com/tedydevmac/sstinccamp2024hackathon.git"
              }
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">Projects / School Events</div>
          </div>

          <div className="column">
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/telegram.webp"]}
              title="Student Helper AI Bot - ARTC-SST Innovation Camp"
              description="A Telegram bot to assist students in their school work management"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/src/assets/logos/telegram.webp"}
              link={"https://github.com/tedydevmac/studenthelp.git"}
              github={"https://github.com/tedydevmac/studenthelp.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/python.png"]}
              title="Cyberbullying vs AI - S3 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/src/assets/logos/python.png"}
              link={"https://github.com/tedydevmac/S3T3CPPT.git"}
              github={"https://github.com/tedydevmac/S3T3CPPT.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/sst.png"]}
              title="WorkBud - S2 ChangeMakers Project"
              description="A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group"
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/src/assets/logos/sst.png"}
              link={"https://github.com/tedydevmac/innofest-app.git"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">Competitions</div>
          </div>

          <div className="column">
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/RAYdar.png"]}
              title="RAYdar - SUTD What The Hack 2024"
              description="An AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups"
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/src/assets/logos/RAYdar.png"}
              link={"https://devpost.com/software/raydar-8dh1xi"}
              github={"https://github.com/tedydevmac/RAYdar.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              title={"BlahajCTF 2024"}
              description={
                "My first external CTF competition I joined alongside my friends"
              }
              imageUrl={"fa-solid fa-flag"}
              imageSrc={"/src/assets/logos/blahajctf.png"}
              iconHover={false}
              tooBig={false}
              singleImage={false}
              images={[
                "/src/assets/blahaj/blahaj1.png",
                "/src/assets/blahaj/blahaj2.png",
                "/src/assets/blahaj/blahaj3.png",
                "/src/assets/blahaj/blahaj4.png",
              ]}
              expanddesc={
                "This was my first ever external competitive CTF competition that I have joined. \nI had done CTFs before in school hosted by SST Inc, but those had more beginner level questions. The questions I encountered were MUCH more difficult. \nLuckily, I had attended their training beforehand and I was able to solve a surpising amount of questions with the help of my teammates. Unfortuantely, despite our best efforts, we only managed to reach the top 30 teams and did not make it to the finals. However, I think it was still a good learning experience in the area of cybersecurity."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/astrigues.png"]}
              title={"Raffles Astronomy Astrigue' 24 Nocturne"}
              description={
                "Won 3rd place overall in the competition with my team"
              }
              imageUrl={"fa-solid fa-earth-europe"}
              imageSrc={"/src/assets/logos/astrigue.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={true}
              images={["/src/assets/perse/persecc.png"]}
              title={"Perse Coding Challenge 2023 - 2025"}
              description={"Won Distinction - Best in School award in 2023"}
              imageUrl={"fa-solid fa-terminal"}
              imageSrc={"/src/assets/logos/persecc.jpg"}
              link={"https://pctc.perse.co.uk/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/sst.png"]}
              title={"SUTD-SST-NP Big-D Camp 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management"
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/src/assets/logos/sst.png"}
              iconHover={true}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/src/assets/logos/sst.png"]}
              title={"ARTC-SST Innovation Camp 2024"}
              description={
                "An innovation camp where we worked on a IoT-enabled hydroponics system to boost plant growth"
              }
              imageUrl={"fa-solid fa-gear"}
              imageSrc={"/src/assets/logos/sst.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
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
