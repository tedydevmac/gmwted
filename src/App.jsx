import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  return (
    <div className="home" id="home">
      <div className="main">
        <div className="introrow">
          <div className="about" id="about">
            <div className="first">
              <div className="div">Hey, I'm Ted!</div>
              <div className="toprowdiv">
                <a
                  href="https://github.com/tedydevmac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`icons fa-brands fa-github`} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ted-goh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`icons fa-brands fa-linkedin`} />
                </a>
                <a href="#contact">
                  <i className={`icons fa-solid fa-envelope`}></i>
                </a>
              </div>
            </div>
            <p className="welcome-to-the">
              <span className="text-wrapper-4">
                I'm a 16 year old developer from Singapore. <br />I worked on
                apps that have
              </span>
              <span className="text-wrapper-5">
                {" "}
                {"{"}
                {"{"} served over 1000 users {"}"}
                {"}"}
              </span>
              <span className="text-wrapper-4">
                , participated in several hackathons & CTFs, and have
              </span>
              <span className="text-wrapper-5"> won awards </span>
              <span className="text-wrapper-4">
                in competitions. <br />I have taught classes on the Flutter
                framework and have
              </span>
              <span className="text-wrapper-5">
                {" "}
                engaged in several service-learning projects{" "}
              </span>
              <span className="text-wrapper-4">as</span>
              <span className="text-wrapper-5">
                {" "}
                {"{"}
                {"{"} an Active Citizenship Education leader {"}"}
                {"}"}
              </span>
              <span className="text-wrapper-4">
                . <br />
                Currently, I am working on a
              </span>
              <span className="text-wrapper-5">
                {" "}
                {"{"}
                {"{"} capstone project with Affinidi {"}"}
                {"}"}
              </span>
              <span className="text-wrapper-4">
                , learning and using their suite of technologies to build a
                mobile app for verifiable student reputation.
              </span>
            </p>
          </div>
          <img
            className="profile"
            src="/_vercel/image?url=/static/logos/IMG_3817.png&w=200&q=70"
          />
        </div>
        <Skills />
        <div className="content" id="projects">
          <div className="title">
            <div className="text-wrapper-6">SST Inc</div>
          </div>

          <div className="column">
            <Card
              images={[
                "/static/OH2024/OHMain.PNG",
                "/static/OH2024/OHAndroid.jpeg",
                "/static/OH2024/OHIOS.PNG",
              ]}
              title="SST Open House App 2024 (IOS/Android)"
              description="I am one of the lead developers for this app which was used during SST's Open House event."
              imageUrl="fa-solid fa-door-open"
              imageSrc={"/static/logos/SSTOH2024.png"}
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
              images={["/static/logos/ASPA.png"]}
              title="ASPA (IOS/Android)"
              description="This was my 2023 Serve project which I worked on until 2024"
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/static/logos/ASPA.png"}
              github={"https://github.com/tedydevmac/aspa.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/virtualtour.png"]}
              title="SST Virtual Tour (Web)"
              description="This was my 2024 Serve project which I am still currently working on"
              imageUrl="fa-solid fa-school"
              imageSrc={"/static/logos/virtualtour.png"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/sstannouncer.png"]}
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features to the app and improved its UI during its revamp in 2023"
              imageUrl="fa-solid fa-school"
              imageSrc={"/static/logos/sstannouncer.png"}
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
              images={["/static/logos/sstinc.png"]}
              title="SST Inc Camp 2024 Hackathon"
              description="A 1 day hackathon where we built a mobile app to spice up the game of TicTacToe"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/static/logos/sstinc.png"}
              github={
                "https://github.com/tedydevmac/sstinccamp2024hackathon.git"
              }
              iconHover={false}
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
              images={["/static/logos/RAYdar.png"]}
              title="SUTD What The Hack 2024"
              description="An AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups"
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/static/logos/RAYdar.png"}
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
              imageSrc={"/static/logos/blahajctf.png"}
              iconHover={false}
              tooBig={false}
              singleImage={false}
              images={[
                "/static/blahaj/blahaj1.png",
                "/static/blahaj/blahaj2.png",
                "/static/blahaj/blahaj3.png",
                "/static/blahaj/blahaj4.png",
              ]}
              expanddesc={
                "This was my first ever external competitive CTF competition that I have joined. \nI had done CTFs before in school hosted by SST Inc, but those had more beginner level questions. The questions I encountered were MUCH more difficult. \nLuckily, I had attended their training beforehand and I was able to solve a surpising amount of questions with the help of my teammates. Unfortuantely, despite our best efforts, we only managed to reach the top 30 teams and did not make it to the finals. However, I think it was still a good learning experience in the area of cybersecurity."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/astrigues.png"]}
              title={"Raffles Astronomy Astrigue' 24 Nocturne"}
              description={
                "Won 3rd place overall in the competition with my team"
              }
              imageUrl={"fa-solid fa-earth-europe"}
              imageSrc={"/static/logos/astrigue.png"}
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
              images={["/static/logos/noi.jpeg"]}
              title={"National Olympiad in Informatics (NOI) 2025"}
              description={"Obtained Participation. My first NOI competition."}
              imageUrl={"fa-solid fa-computer"}
              imageSrc={"/static/logos/noi.jpeg"}
              link={"https://noisg.comp.nus.edu.sg/noi/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={true}
              images={["/static/logos/sg60portal.png"]}
              title={"SP National Software Competition 2025"}
              description={
                "Won 1st place. A SG60 Portal app, all-in-one platform for SG60 related matters."
              }
              imageUrl={"fa-brands fa-app-store-ios"}
              imageSrc={"/static/logos/sg60portal.png"}
              link={"https://devpost.com/software/sg60portal"}
              github={"https://github.com/tedydevmac/SP_NSComp.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={true}
              images={["/static/perse/persecc.png"]}
              title={"Perse Coding Challenge 2023 - 2025"}
              description={
                "Won Distinction - Best in School award in 2023, Won Distinction in 2025 "
              }
              imageUrl={"fa-solid fa-terminal"}
              imageSrc={"/static/logos/persecc.jpg"}
              link={"https://pctc.perse.co.uk/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/sst.png"]}
              title={"SUTD-SST-NP Big-D Camp 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management"
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/static/logos/sst.png"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/sst.png"]}
              title={"ARTC-SST Innovation Camp 2024"}
              description={
                "An innovation camp where we worked on a IoT-enabled hydroponics system to boost plant growth. Won Most Environmentally Sustainable Award."
              }
              imageUrl={"fa-solid fa-gear"}
              imageSrc={"/static/logos/sst.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
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
              images={["/static/logos/telegram.webp"]}
              title="Student Helper AI Bot - ARTC-SST Innovation Camp"
              description="A Telegram bot to assist students in their school work management"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/static/logos/telegram.webp"}
              github={"https://github.com/tedydevmac/studenthelp.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/python.png"]}
              title="Cyberbullying vs AI - S3 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/static/logos/python.png"}
              link={"https://github.com/tedydevmac/S3T3CPPT.git"}
              github={"https://github.com/tedydevmac/S3T3CPPT.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/python.png"]}
              title="Virtual Photobooth - S4 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/static/logos/python.png"}
              link={"https://github.com/tedydevmac/py-photobooth.git"}
              github={"https://github.com/tedydevmac/py-photobooth.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/static/logos/sst.png"]}
              title="WorkBud - S2 ChangeMakers Project"
              description="A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group"
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/static/logos/sst.png"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>
        <Contact />
      </div>
      <div id="footer">
        <Footer className="footer-instance" />
      </div>
      <Sidebar className="navigation" />
    </div>
  );
};
export default App;
