import React, { useState, useEffect, useRef } from "react";
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
    title: "#ProjectSF",
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
      desc: "The SST x BBS IDP IEP is an international exchange programme only for students part of the Integrated Diploma Programme (IDP) in SST. Through this IEP, we got to meet and work with our Indonesian counterparts in Jakarta on a project to monitor carbon dioxide levels.",
      imgSrc: [
        "assets/sstbbs/1a.JPG",
        "assets/sstbbs/2a.JPG",
        "assets/sstbbs/3a.jpg",
        "assets/sstbbs/4a.jpg",
        "assets/sstbbs/5a.JPG",
        "assets/sstbbs/6a.jpg",
        "assets/sstbbs/7a.jpg",
        "assets/sstbbs/8a.JPG",
        "assets/sstbbs/9a.JPG",
        "assets/sstbbs/10a.jpg",
        "assets/sstbbs/11a.jpg",
        "assets/sstbbs/12a.JPG",
        "assets/sstbbs/13a.jpg",
        "assets/sstbbs/14a.jpg",
      ],
    },
    {
      title: "ACE Leader",
      desc: "I was an Active Citizenship Education (ACE) Leader throughout my SST journey where I got to embark on several service-learning projects to give back to the community. I was in the ACE Interactions team mainly focusing on connecting with the beneficiaries. One notable project I did was the Interactions@Hendersons project where we hosted an in-person Online Scam Prevention workshop for the elderly.",
      imgSrc: ["assets/ACE/1.png", "assets/ACE/2.png", "assets/ACE/3.png"],
    },
    {
      title: "LABB",
      desc: "LABB is a virtual programme where we got to meet with students from all around the world to collaborate on a project together. For my group, we got to meet with students from Bina Bangsa School in Jakarta, where we worked on a project to plan our eventual in-person project on measuring air quality differences between Singapore and Indonesia.",
      imgSrc: ["assets/LABB/1.png"],
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

  // Certifications data
  const certifications = [
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2024",
      imgSrc: "/assets/certifications/cybersecurity.png",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      date: "Dec 2024",
      imgSrc: "/assets/certifications/python.jpeg",
    },
    {
      title: "IMDA x Meta Spark AR Bootcamp",
      issuer: "MeshMinds",
      date: "Nov 2022",
      imgSrc: "/assets/certifications/meshmind.png",
    },
    {
      title: "Apple Teacher (Swift Playgrounds)",
      issuer: "Apple",
      date: "Oct 2022",
      imgSrc: "/assets/certifications/atsp.png",
    },
    {
      title: "Apple Teacher",
      issuer: "Apple",
      date: "Oct 2022",
      imgSrc: "/assets/certifications/at.png",
    },
    // Add more certifications as needed
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
    { name: "SwiftUI", icon: "fa-brands fa-swift" },
    { name: "Figma", icon: "fa-brands fa-figma" },

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag-to-scroll logic for .column rows
  const columnRefs = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (idx, e) => {
    if (isMobile) return;
    isDragging.current = true;
    startX.current = e.pageX - columnRefs.current[idx].offsetLeft;
    scrollLeft.current = columnRefs.current[idx].scrollLeft;
    columnRefs.current[idx].classList.add("dragging");
  };
  const handleMouseLeave = (idx) => {
    isDragging.current = false;
    columnRefs.current[idx].classList.remove("dragging");
  };
  const handleMouseUp = (idx) => {
    isDragging.current = false;
    columnRefs.current[idx].classList.remove("dragging");
  };
  const handleMouseMove = (idx, e) => {
    if (!isDragging.current || isMobile) return;
    e.preventDefault();
    const x = e.pageX - columnRefs.current[idx].offsetLeft;
    const walk = (x - startX.current) * 1.2; // scroll-fast
    columnRefs.current[idx].scrollLeft = scrollLeft.current - walk;
  };

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
                active={exp.title === currentExperience.title}
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

          <div
            className="column"
            ref={(el) => (columnRefs.current[0] = el)}
            onMouseDown={(e) => handleMouseDown(0, e)}
            onMouseLeave={() => handleMouseLeave(0)}
            onMouseUp={() => handleMouseUp(0)}
            onMouseMove={(e) => handleMouseMove(0, e)}
            style={{ cursor: !isMobile ? "grab" : undefined }}
          >
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
              skills={[
                "React Native",
                "Mobile App",
                "Teamwork",
                "UI/UX",
                "Hackathon",
              ]}
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
              skills={[
                "Flutter",
                "Firebase",
                "Mobile App",
                "Event Integration",
                "Team Leadership",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/ASPA.png"]}
              title="ASPA (IOS,Android)"
              description="ASPA aims to centralise medical resources for doctors working under Asean Society of Paediatric Anaesthesiologists. It includes tools to calculate drug dosages, contain important medical information, and quick reference materials. My Project Serve for 2023-2024."
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/assets/logos/ASPA.png"}
              github={"https://github.com/tedydevmac/aspa.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "React Native",
                "Medical Informatics",
                "API Integration",
                "UI/UX",
                "Teamwork",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/virtualtour.png"]}
              title="SST Virtual Tour (Web)"
              description="This website lets potential students and parents explore the school and its facilities through a 360 degree tour. My 2024 Serve Project"
              imageUrl="fa-solid fa-school"
              imageSrc={"/assets/logos/virtualtour.png"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "React",
                "360° Media",
                "Web Development",
                "UI/UX",
                "Deployment",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sstannouncer.png"]}
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features and improved its UI during its revamp in 2023. This app is used by all students in SST to receive school-wide announcements and events."
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
              skills={[
                "Flutter",
                "Android",
                "UI/UX",
                "Notifications",
                "Collaboration",
              ]}
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
              skills={[
                "React Native",
                "Mobile App",
                "Teamwork",
                "UI/UX",
                "Hackathon",
              ]}
            />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">Competitions</div>
          </div>

          <div
            className="column"
            ref={(el) => (columnRefs.current[1] = el)}
            onMouseDown={(e) => handleMouseDown(1, e)}
            onMouseLeave={() => handleMouseLeave(1)}
            onMouseUp={() => handleMouseUp(1)}
            onMouseMove={(e) => handleMouseMove(1, e)}
            style={{ cursor: !isMobile ? "grab" : undefined }}
          >
            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/logos/sg60portal.png"]}
              title={"SP National Software Competition 2025"}
              description={
                "Won 1st place overall. My team and I created: SG60 Portal App, an all-in-one one-stop platform for SG60 related matters, targeted towards the general public."
              }
              imageUrl={"fa-brands fa-app-store-ios"}
              imageSrc={"/assets/logos/spnsc.png"}
              link={"https://devpost.com/software/sg60portal"}
              github={"https://github.com/tedydevmac/SP_NSComp.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "React",
                "Node.js",
                "Full Stack",
                "API Development",
                "Teamwork",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/astrigues.png"]}
              title={"Raffles Astronomy Astrigue' 24 Nocturne"}
              description={
                "Won 3rd place overall. A competition where we were tested on our knowledge regarding Astronomy and Space Science."
              }
              imageUrl={"fa-solid fa-earth-europe"}
              imageSrc={"/assets/logos/astrigue.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Data Analysis",
                "Astronomy",
                "Space Science",
                "Teamwork",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/logos/buildingblocs.svg"]}
              title={"BuildingBloCS 2025"}
              description={
                "Created Computer Vision models to improve accessiblity for the deaf and blind to help them better navigate this world, bundled in an app for everyday use."
              }
              imageUrl={"fa-solid fa-universal-access"}
              imageSrc={"/assets/logos/buildingblocs.png"}
              iconHover={false}
              expanddesc={
                "Made AI models to improve accessiblity for the deaf and blind, bundled in an App for everyday use. BuildingBloCS is a hackathon focused on accessibility and inclusivity."
              }
              skills={[
                "Python",
                "Computer Vision",
                "AI",
                "Accessibility",
                "Inclusivity",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sutdwth.png"]}
              title="SUTD What The Hack 2024"
              description="For this hackathon, we built an AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups."
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/assets/logos/sutdwth.png"}
              link={"https://devpost.com/software/raydar-8dh1xi"}
              github={"https://github.com/tedydevmac/RAYdar.git"}
              iconHover={true}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "AI",
                "Chrome Extension",
                "LGBTQ+",
                "Minority Groups",
              ]}
            />
            <Card
              title={"BlahajCTF 2024"}
              description={
                "This was my first CTF experience. It was an online competition where we spent all day solving cybersecurity-related problems to gather as many points as possible."
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
              skills={[
                "Cybersecurity",
                "CTF",
                "Teamwork",
                "Problem Solving",
                "Learning",
              ]}
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
              skills={[
                "Computer Science",
                "Olympiad",
                "Competition",
                "Learning",
                "Teamwork",
              ]}
            />

            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/persecc.png"]}
              title={"Perse Coding Challenge 2023 - 2025"}
              description={
                "Won Distinction - Best in School award in 2023, Won Distinction in 2025"
              }
              imageUrl={"fa-solid fa-terminal"}
              imageSrc={"/assets/logos/persecc.jpg"}
              link={"https://pctc.perse.co.uk/"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Coding",
                "Competition",
                "Learning",
                "Teamwork",
              ]}
            />
          </div>
        </div>

        <div className="content">
          <div className="title">
            <div className="text-wrapper-6">School Events / Projects</div>
          </div>

          <div
            className="column"
            ref={(el) => (columnRefs.current[2] = el)}
            onMouseDown={(e) => handleMouseDown(2, e)}
            onMouseLeave={() => handleMouseLeave(2)}
            onMouseUp={() => handleMouseUp(2)}
            onMouseMove={(e) => handleMouseMove(2, e)}
            style={{ cursor: !isMobile ? "grab" : undefined }}
          >
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP Integrated Design Challenge 2025"}
              description={
                "A challenge where we had to create an autonomous robot vehicle that uses computer vision to transport food."
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.png"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Computer Vision",
                "Robotics",
                "Autonomous",
                "Teamwork",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP SUTD-SST-NP Big-D Camp 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management."
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.png"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Robotics",
                "Remote Control",
                "Disaster Management",
                "Teamwork",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title={"IDP ARTC-SST Innovation Camp 2024"}
              description={
                "An innovation camp where my team and I developed an IoT-enabled hydroponics system to boost plant growth. Won Most Environmentally Sustainable Award."
              }
              imageUrl={"fa-solid fa-gear"}
              imageSrc={"/assets/logos/sst.png"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "IoT",
                "Hydroponics",
                "Innovation",
                "Sustainability",
              ]}
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
              skills={[
                "Python",
                "Machine Learning",
                "Natural Language Processing",
                "Cyberbullying",
                "LGBTQ+",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/python.png"]}
              title="Virtual Photobooth - S4 Computing+ Coursework "
              description="A virtual photobooth which involved landmarking the face to place virtual props on the user's face, bundled into an interactive experience aimed to serve as a meaningful addition to SST Celebrations."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/assets/logos/python.png"}
              link={"https://github.com/tedydevmac/py-photobooth.git"}
              github={"https://github.com/tedydevmac/py-photobooth.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Computer Vision",
                "Photobooth",
                "Interactive",
                "SST Celebrations",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/telegram.webp"]}
              title="Student Helper AI Bot - ARTC-SST Innovation Pre-camp"
              description="A Telegram bot to assist students in their school work management. Created during the workshop on creating Telegram bots during the pre-camp."
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/telegram.webp"}
              github={"https://github.com/tedydevmac/studenthelp.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Telegram Bot",
                "School Work Management",
                "Collaboration",
                "Innovation",
              ]}
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
              skills={[
                "Python",
                "Self-Help",
                "Exercise",
                "Muscle Group",
                "Target Group",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.png"]}
              title="S1 ChangeMakers InnoScience Challenge"
              description="Won Best ICT Award. Created a product powered by sensors to preserve food as long as possible."
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/assets/logos/sst.png"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={false}
              expanddesc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              skills={[
                "Python",
                "Sensor",
                "Food Preservation",
                "ICT",
                "Innovation",
              ]}
            />
          </div>
        </div>

        <div className="content" id="internships">
          <div className="work-certifications-row">
            <div className="internships-container" style={{ flex: 1 }}>
              <div className="section-header">Work Attachment</div>
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
            <div className="vertical-divider" />
            <div
              className="certifications-container"
              style={{ flex: 1, marginLeft: 0 }}
            >
              <div className="section-header">Certifications</div>
              {certifications.map((cert, idx) => (
                <div className="certification-card" key={idx}>
                  <div className="certification-header">
                    {cert.imgSrc && (
                      <img
                        src={cert.imgSrc}
                        alt={cert.issuer}
                        className="certification-logo"
                      />
                    )}
                    <div className="certification-title-section">
                      <h3 className="certification-title">{cert.title}</h3>
                      <div className="certification-issuer">{cert.issuer}</div>
                      <div className="certification-date">{cert.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Contact />
      </div>
      <div id="footer">
        <Footer className="footer-instance" />
      </div>
      {!isMobile && <Sidebar className="navigation" />}
      <SpeedInsights />
    </div>
  );
};
export default App;
