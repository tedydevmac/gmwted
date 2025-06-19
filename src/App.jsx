import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Notice } from "./components/Notice/Notice";
import { Contact } from "./components/Contact/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Experience from "./components/Experience/Experience";
import { ExperienceButton } from "./components/Experience/ExperienceControl";
import InternshipCard from "./components/Internship/InternshipCard";

export const App = () => {
  const [currentExperience, setCurrentExperience] = useState({
    title: "#Project SF",
    desc: "#ProjectSF is a 10 day 8 night learning journey to San Francisco, where we got to learn more about Silicon Valley from industry partners and mentors who work there, and got a feel for what it's like to work in San Francisco.",
    imgSrc: [
      "assets/projectsf/1.jpg",
      "assets/projectsf/2.jpg",
      "assets/projectsf/3.jpg",
      "assets/projectsf/4.png",
      "assets/projectsf/5.jpg",
      "assets/projectsf/6.jpg",
    ],
  });

  const experiences = [
    {
      title: "#Project SF",
      desc: "#ProjectSF is a 10 day 8 night learning journey to San Francisco, where we got to learn more about Silicon Valley from industry partners and mentors who work there, and got a feel for what it's like to work in San Francisco.",
      imgSrc: [
        "assets/projectsf/1.jpg",
        "assets/projectsf/2.jpg",
        "assets/projectsf/3.jpg",
        "assets/projectsf/4.png",
        "assets/projectsf/5.jpg",
        "assets/projectsf/6.jpg",
      ],
    },
    {
      title: "SST x BBS IDP IEP",
      desc: "A collaborative project between SST and BBS to foster innovation and entrepreneurship.",
      imgSrc: ["assets/sstbbs/1.jpg", "assets/sstbbs/2.jpg"],
    },
    {
      title: "LABB",
      desc: "A hands-on learning experience focused on building and prototyping innovative solutions.",
      imgSrc: ["assets/labb/1.jpg", "assets/labb/2.jpg"],
    },
  ];

  const internships = [
    {
      title: "Hyundai Motor Group Innovation Center Singapore",
      period: "August 2024",
      company: "Hyundai",
      description:
        "Saw in person the advancements in manufacturing automation and robotics, learned about what's it like to work at HMGICS",
      technologies: [
        "Project Management",
        "Presentation Skills",
        "Collaboration",
        "Critical Thinking",
      ],
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/020/500/331/non_2x/hyundai-logo-brand-symbol-with-name-blue-design-south-korean-car-automobile-illustration-free-vector.jpg",
    },
    {
      title: "Capstone Project with Affinidi",
      period: "Jan 2025 - Nov 2025",
      company: "Affinidi",
      description:
        "Using Affinidi's tools to build a mobile app for verifiable student reputation.",
      technologies: ["React Native", "Node.js", "Typescript", "HTML", "CSS"],
      imgSrc:
        "https://yt3.googleusercontent.com/QfTzb2BlKvN_4dSki3lsX3t2extFeV1ZsXxMQTES5HGmAf2Y5b_LbZ8fVxbbifkcHx0TXvevyA=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  // Define skills with their icons and names
  const skills = [
    // Frontend
    { name: "React", icon: "fa-brands fa-react" },
    { name: "React Native", icon: "fa-solid fa-mobile-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "TypeScript", icon: "fa-solid fa-code" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "Flutter", icon: "fa-brands fa-flutter" },
    { name: "Dart", icon: "fa-brands fa-dart-lang" },

    // Backend & Languages
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "C++", icon: "fa-solid fa-code" },
    { name: "Django", icon: "fa-solid fa-sitemap" },
    { name: "Flask", icon: "fa-solid fa-flask" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "MongoDB", icon: "fa-solid fa-database" },

    // Data Science & AI
    { name: "NumPy", icon: "fa-solid fa-calculator" },
    { name: "TensorFlow", icon: "fa-solid fa-brain" },
    { name: "OpenCV", icon: "fa-solid fa-camera" },
    { name: "PyTorch", icon: "fa-solid fa-fire-flame-curved" },
    { name: "Streamlit", icon: "fa-solid fa-water" },

    // DevOps & Tools
    { name: "Firebase", icon: "fa-solid fa-fire" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "GitHub", icon: "fa-brands fa-github" },

    // Hardware & IoT
    { name: "Arduino", icon: "fa-solid fa-microchip" },
  ];

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
          <img className="profile" src="/assets/logos/IMG_3817.png" />
        </div>

        {/* Skills Section */}
        <div className="content" id="skills">
          <div className="title">
            <div className="text-wrapper-6">Tech Stack</div>
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  // Add subtle category-based color hints
                  borderTop:
                    index < 8
                      ? "2px solid rgba(97, 218, 251, 0.7)" // Frontend - React color
                      : index < 14
                      ? "2px solid rgba(83, 168, 220, 0.7)" // Backend - Django/Flask blue
                      : index < 17
                      ? "2px solid rgba(255, 183, 77, 0.7)" // Data Science - TensorFlow orange
                      : index < 20
                      ? "2px solid rgba(110, 220, 156, 0.7)" // DevOps - green
                      : "2px solid rgba(255, 102, 102, 0.7)", // Hardware & IoT - red
                }}
              >
                <i className={`${skill.icon} skill-icon`}></i>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="content" id="experiences">
          <div className="title">
            <div className="text-wrapper-6">Experiences</div>
          </div>
          <div className={"experience-control-row"}>
            {experiences.map((exp, index) => (
              <ExperienceButton
                key={index}
                title={exp.title}
                onClick={() => setCurrentExperience(exp)}
              />
            ))}
          </div>
          <Experience
            title={currentExperience.title}
            desc={currentExperience.desc}
            imgSrc={currentExperience.imgSrc}
          />
        </div>

        <Notice />
        <div className="content" id="projects">
          <div className="title">
            <div className="text-wrapper-6">SST Inc</div>
          </div>

          <div className="column">
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sstinc.png"]}
              title="SST Inc Application of the Year Champion 2024"
              description="A 1 day hackathon where we built a mobile app to spice up the game of TicTacToe"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/sstinc.png"}
              github={
                "https://github.com/tedydevmac/sstinccamp2024hackathon.git"
              }
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              images={[
                "/assets/OH2024/OHMain.PNG",
                "/assets/OH2024/OHAndroid.jpeg",
                "/assets/OH2024/OHIOS.PNG",
              ]}
              title="SST Open House App 2024 (IOS/Android)"
              description="I am one of the lead developers for this app which was used during SST's Open House event."
              imageUrl="fa-solid fa-door-open"
              imageSrc={"/assets/logos/SSTOH2024.png"}
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
              images={["/assets/logos/ASPA.png"]}
              title="ASPA (IOS/Android)"
              description="This was my 2023 Serve project which I worked on until 2024"
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/assets/logos/ASPA.png"}
              github={"https://github.com/tedydevmac/aspa.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/virtualtour.png"]}
              title="SST Virtual Tour (Web)"
              description="This was my 2024 Serve project which I am still currently working on"
              imageUrl="fa-solid fa-school"
              imageSrc={"/assets/logos/virtualtour.png"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sstannouncer.png"]}
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features to the app and improved its UI during its revamp in 2023"
              imageUrl="fa-solid fa-school"
              imageSrc={"/assets/logos/sstannouncer.png"}
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
              images={["/assets/logos/sstinc.png"]}
              title="SST Inc Camp 2024 Hackathon"
              description="A 1 day hackathon where we built a mobile app to spice up the game of TicTacToe"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/sstinc.png"}
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
              singleImage={true}
              images={["/assets/logos/sg60portal.png"]}
              title={"SP National Software Competition 2025"}
              description={
                "Won 1st place. A SG60 Portal app, all-in-one platform for SG60 related matters."
              }
              imageUrl={"fa-brands fa-app-store-ios"}
              imageSrc={"/assets/logos/sg60portal.png"}
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
              images={["/assets/logos/buildingblocs.png"]}
              title={"BuildingBloCS 2025"}
              description={
                "Made AI models to improve accessiblity for the deaf and blind, bundled in an app for everyday use"
              }
              imageUrl={"fa-solid fa-universal-access"}
              imageSrc={"/assets/logos/buildingblocs.png"}
              iconHover={false}
              expanddesc={
                "Made AI models to improve accessiblity for the deaf and blind, bundled in an App for everyday use. BuildingBloCS is a hackathon focused on accessibility and inclusivity."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/astrigues.png"]}
              title={"Raffles Astronomy Astrigue' 24 Nocturne"}
              description={
                "Won 3rd place overall in the competition with my team"
              }
              imageUrl={"fa-solid fa-earth-europe"}
              imageSrc={"/assets/logos/astrigue.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/RAYdar.png"]}
              title="SUTD What The Hack 2024"
              description="An AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups"
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/assets/logos/RAYdar.png"}
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
              imageSrc={"/assets/logos/blahajctf.png"}
              iconHover={false}
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/blahaj/blahaj1.png",
                "/assets/blahaj/blahaj2.png",
                "/assets/blahaj/blahaj3.png",
                "/assets/blahaj/blahaj4.png",
              ]}
              expanddesc={
                "This was my first ever external competitive CTF competition that I have joined. \nI had done CTFs before in school hosted by SST Inc, but those had more beginner level questions. The questions I encountered were MUCH more difficult. \nLuckily, I had attended their training beforehand and I was able to solve a surpising amount of questions with the help of my teammates. Unfortuantely, despite our best efforts, we only managed to reach the top 30 teams and did not make it to the finals. However, I think it was still a good learning experience in the area of cybersecurity."
              }
            />

            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/logos/noi.jpeg"]}
              title={"National Olympiad in Informatics (NOI) 2025"}
              description={"Obtained Participation. My first NOI competition."}
              imageUrl={"fa-solid fa-computer"}
              imageSrc={"/assets/logos/noi.jpeg"}
              link={"https://noisg.comp.nus.edu.sg/noi/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />

            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/persecc.png"]}
              title={"Perse Coding Challenge 2023 - 2025"}
              description={
                "Won Distinction - Best in School award in 2023, Won Distinction in 2025 "
              }
              imageUrl={"fa-solid fa-terminal"}
              imageSrc={"/assets/logos/persecc.jpg"}
              link={"https://pctc.perse.co.uk/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>

        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">School Events / Projects</div>
          </div>

          <div className="column">
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP Integrated Design Challenge 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management"
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.png"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP SUTD-SST-NP Big-D Camp 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management"
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.png"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP ARTC-SST Innovation Camp 2024"}
              description={
                "An innovation camp where we worked on a IoT-enabled hydroponics system to boost plant growth. Won Most Environmentally Sustainable Award."
              }
              imageUrl={"fa-solid fa-gear"}
              imageSrc={"/assets/logos/sst.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/python.png"]}
              title="Cyberbullying vs AI - S3 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/assets/logos/python.png"}
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
              images={["/assets/logos/python.png"]}
              title="Virtual Photobooth - S4 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/assets/logos/python.png"}
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
              images={["/assets/logos/telegram.webp"]}
              title="Student Helper AI Bot - ARTC-SST Innovation Pre-amp"
              description="A Telegram bot to assist students in their school work management"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/telegram.webp"}
              github={"https://github.com/tedydevmac/studenthelp.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title="WorkBud - S2 ChangeMakers Project"
              description="A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group"
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/assets/logos/sst.png"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title="S1 ChangeMakers InnoScience Challenge"
              description="A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group"
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/assets/logos/sst.png"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>

        <div className="content" id="internships">
          <div className="title">
            <div className="text-wrapper-6">Work</div>
          </div>
          <div className="internships-container">
            {internships.map((internship, index) => (
              <InternshipCard
                key={index}
                title={internship.title}
                period={internship.period}
                company={internship.company}
                description={internship.description}
                technologies={internship.technologies}
                imgSrc={internship.imgSrc}
                index={index}
              />
            ))}
          </div>
        </div>

        <Contact />
      </div>
      <div id="footer">
        <Footer className="footer-instance" />
      </div>
      <Sidebar className="navigation" />
      <SpeedInsights />
    </div>
  );
};
export default App;
