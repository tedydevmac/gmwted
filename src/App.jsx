import { Analytics } from "@vercel/analytics/react";
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
  // Helper function to detect and format video files
  const formatMediaArray = (mediaArray) => {
    return mediaArray.map((item) => {
      if (
        typeof item === "string" &&
        (item.endsWith(".mp4") ||
          item.endsWith(".MP4") ||
          item.endsWith(".mov") ||
          item.endsWith(".MOV"))
      ) {
        return {
          type: "video",
          src: item,
          poster: null, // You can add poster frames later if needed
        };
      }
      return typeof item === "string" ? { type: "image", src: item } : item;
    });
  };

  const [currentExperience, setCurrentExperience] = useState({
    title: "#ProjectSF",
    desc: "#ProjectSF is a 10 day 8 night learning journey to San Francisco, where we got to learn more about Silicon Valley from industry partners and mentors who work there, and got a feel for what it's like to work in San Francisco.",
    imgSrc: [
      "assets/projectsf/1.webp",
      "assets/projectsf/2.webp",
      "assets/projectsf/3.webp",
      "assets/projectsf/4.webp",
      "assets/projectsf/5.webp",
      "assets/projectsf/6.webp",
    ],
  });

  const experiences = [
    {
      title: "#Project SF",
      desc: "#ProjectSF is a 10 day 8 night learning journey to San Francisco, where we got to learn more about Silicon Valley from industry partners and mentors who work there, and got a feel for what it's like to work in San Francisco.",
      imgSrc: [
        "assets/projectsf/1.webp",
        "assets/projectsf/2.webp",
        "assets/projectsf/3.webp",
        "assets/projectsf/4.webp",
        "assets/projectsf/5.webp",
        "assets/projectsf/6.webp",
      ],
    },
    {
      title: "SST x BBS IDP IEP",
      desc: "The SST x BBS IDP IEP is an international exchange programme only for students part of the Integrated Diploma Programme (IDP) in SST. Through this IEP, we got to meet and work with our Indonesian counterparts in Jakarta on a project to monitor carbon dioxide levels.",
      imgSrc: [
        "assets/sstbbs/1a.webp",
        "assets/sstbbs/2a.webp",
        "assets/sstbbs/3a.webp",
        "assets/sstbbs/4a.webp",
        "assets/sstbbs/5a.webp",
        "assets/sstbbs/6a.webp",
        "assets/sstbbs/7a.webp",
        "assets/sstbbs/8a.webp",
        "assets/sstbbs/9a.webp",
        "assets/sstbbs/10a.webp",
        "assets/sstbbs/11a.webp",
        "assets/sstbbs/12a.webp",
        "assets/sstbbs/13a.webp",
        "assets/sstbbs/14a.webp",
      ],
    },
    {
      title: "ACE Leadership",
      desc: "I was an Active Citizenship Education (ACE) Leader throughout my SST journey where I got to embark on several service-learning projects to give back to the community. I was in the ACE Interactions team mainly focusing on connecting with the beneficiaries. One notable project I did was the Interactions@Hendersons project where we hosted an in-person Online Scam Prevention workshop for the elderly.",
      imgSrc: ["assets/ACE/1.webp", "assets/ACE/2.webp", "assets/ACE/3.webp"],
    },
    {
      title: "LABB",
      desc: "LABB is a virtual programme where we got to meet with students from all around the world to collaborate on a project together. For my group, we got to meet with students from Bina Bangsa School in Jakarta, where we worked on a project to plan our eventual in-person project on measuring air quality differences between Singapore and Indonesia.",
      imgSrc: ["assets/LABB/1.webp"],
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
        "https://static.vecteezy.com/system/resources/previews/020/500/331/non_2x/hyundai-logo-brand-symbol-with-name-blue-design-south-korean-car-automobile-illustration-free-vector.webp",
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
      imgSrc: "/assets/certifications/cybersecurity.webp",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      date: "Dec 2024",
      imgSrc: "/assets/certifications/python.webp",
    },
    {
      title: "IMDA x Meta Spark AR Bootcamp",
      issuer: "MeshMinds",
      date: "Nov 2022",
      imgSrc: "/assets/certifications/meshmind.webp",
    },
    {
      title: "Apple Teacher (Swift Playgrounds)",
      issuer: "Apple",
      date: "Oct 2022",
      imgSrc: "/assets/certifications/atsp.webp",
    },
    {
      title: "Apple Teacher",
      issuer: "Apple",
      date: "Oct 2022",
      imgSrc: "/assets/certifications/at.webp",
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
    { name: "Swift", icon: "fa-brands fa-swift" },
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
    { name: "Pandas", icon: "fa-solid fa-database" },
    { name: "Scikit-learn", icon: "fa-solid fa-brain" },
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
                framework and am
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
          <img
            className="profile"
            src="/assets/logos/IMG_3817.webp"
            loading="lazy"
          />
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
              images={[
                "/assets/sstincappofyear/appofyear1.webp",
                "/assets/sstincappofyear/appofyear2.webp",
                "/assets/sstincappofyear/appofyear3.webp",
              ]}
              title="SST Inc Application of the Year Champion 2024"
              description="My Serve company won this award due to creations of our various well-performing apps. We were selected for #ProjectSF because of this."
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/sstinc.webp"}
              github={"https://github.com/sst-inc/openhouseapp.git"}
              link={
                "https://www.instagram.com/p/DDZPigwz7pZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              }
              iconHover={false}
              expanddesc={
                "My Serve Company, orbitcode, had created 3 projects: SST Open House, ASPA, SST Virtual Tour, which had all scored very well after being graded by the Board of Directors (BODs) of SST Inc.\nThis is in combination with our Peer Reviews, where we graded each other on our performance and quality of work.\n\nAll in all, we had all scored very well and were hence named the SST Inc App of the Year for 2024 and were then selected for #ProjectSF."
              }
              skills={[
                "React Native",
                "React",
                "HTML",
                "CSS",
                "Javascript",
                "Mobile/Web",
              ]}
            />
            <Card
              images={[
                "/assets/OH2024/OHMain.webp",
                "/assets/OH2024/OHAndroid.webp",
                "/assets/OH2024/OHIOS.webp",
              ]}
              title="SST Open House App (IOS,Android)"
              description="I was one of the lead developers for this app which was used during SST's Open House Day for 2024/2025. Reached #2 in Trending on the App Store during Open House day and achieved >1000 total downloads from both platforms."
              imageUrl="fa-solid fa-door-open"
              imageSrc={"/assets/logos/SSTOH2024.webp"}
              link={
                "https://apps.apple.com/us/app/sst-open-house-2024/id6479939416"
              }
              github={"https://github.com/tedydevmac/openhouseapp2024.git"}
              iconHover={true}
              expanddesc={
                "Requested by teachers planning the Open House event, they wanted an app to be made to be integrated with the event activities, engage visitors and provide information about the school.\n\nMy existing Project Serve team decided to take on this task alongside that year's Serve project. Although our schedules were extremely packed, we worked on it to our best ability despite time challenges.\n\nIn the end the launch of the app was successful, and it ended up accumulating over 1000 users during event day, reaching Number 2 in Trending on the App Store."
              }
              tooBig={false}
              singleImage={false}
              skills={["React Native", "HTML", "CSS", "Mobile App"]}
            />
            <Card
              tooBig={true}
              singleImage={false}
              images={[
                "/assets/aspa/aspa1.webp",
                "/assets/aspa/aspa2.webp",
                "/assets/aspa/aspa3.webp",
                "/assets/aspa/aspa4.webp",
                "/assets/aspa/aspa5.webp",
                "/assets/aspa/aspa6.webp",
              ]}
              title="ASPA (IOS,Android)"
              description="ASPA app aims to centralise medical resources for doctors working under Asia Society of Paediatric Anaesthesiologists. It includes tools to calculate drug dosages, contain important medical information, and quick reference materials. My Serve Project for 2023-2024."
              imageUrl="fa-solid fa-user-doctor"
              imageSrc={"/assets/logos/ASPA.webp"}
              github={"https://github.com/tedydevmac/aspa.git"}
              iconHover={false}
              expanddesc={
                "A mobile app which we made in collaboration with KKH Hospital.\nAt first it was only meant to be made for use for KKH, however, the doctors we were working with had expanded the app's user base to be used for doctors working under Asia Society of Paediatric Anaesthesiologists too, which is a society of paediatric anaesthesia colleagues from various Asian countries."
              }
              skills={["React Native", "Mobile App", "Medical Informatics"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={formatMediaArray(["/assets/virtualtour/video.MP4"])}
              title="SST Virtual Tour (Web)"
              description="This website lets potential students and parents explore the school and its facilities through a 360 degree tour. My 2024 Serve Project"
              imageUrl="fa-solid fa-school"
              imageSrc={"/assets/logos/virtualtour.webp"}
              github={"https://github.com/tedydevmac/virtualtour.git"}
              iconHover={false}
              expanddesc={
                "The SST virtual tour app aims to provide those interested in touring SST with a convenient way to tour SST without having to come to SST physically, as SST receives requests for campus tours from parents, but they do not have provisions to meet these requests. The web app contains 3D tours of specified areas and rooms in SST."
              }
              skills={["React", "Web"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sstannouncer.webp"]}
              title="SST Announcer (Android)"
              description="As a volunteer, I helped add new features and improved its UI during its revamp in 2023. This app is used by all students in SST to receive school-wide announcements and events."
              imageUrl="fa-solid fa-school"
              imageSrc={"/assets/logos/sstannouncer.webp"}
              link={
                "https://play.google.com/store/apps/details?id=com.sst.anouncements&pcampaignid=web_share"
              }
              github={"https://github.com/tedydevmac/SST-Announcer-flutter.git"}
              iconHover={true}
              expanddesc={
                "SST Announcer is an app built for students and staff of the School of Science and Technology, Singapore, to stay updated with the school's announcements with ease and convenience on their devices.\n\nThe app allows users to browse, pin and share important announcements made by the school.\nFurthermore, the app also sends notifications to students whenever a new announcement is posted. This helps to ensure that students are kept updated with the latest information from the school. It also allows them to sign up for competitions and programs efficiently."
              }
              skills={["Flutter", "Cross-platform", "APIs"]}
            />
            <Card
              tooBig={true}
              singleImage={true}
              images={["/assets/logos/sstinc.webp"]}
              title="SST Inc Camp 2024 Hackathon"
              description="A 1 day hackathon where we built a mobile app to spice up the game of TicTacToe"
              imageUrl="fa-brands fa-telegram"
              imageSrc={"/assets/logos/sstinc.webp"}
              github={
                "https://github.com/tedydevmac/sstinccamp2024hackathon.git"
              }
              iconHover={false}
              expanddesc={
                "Our idea was to break free from the conventional move of placing 'shape on empty square only' by adding a simple trick of allowing the player to replace the other player's shape with their own.\nThis allowed for a more diverse set of possible games as it allowed for more possibilities in placement strategies."
              }
              skills={["React Native", "Mobile App"]}
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
              singleImage={false}
              images={formatMediaArray([
                "/assets/nsc/1.webp",
                "/assets/nsc/3.webp",
                "/assets/nsc/4.webp",
                "/assets/nsc/5.webp",
                "/assets/nsc/videoplayback.mp4",
              ])}
              title={"SP National Software Competition 2025"}
              description={
                "Won 1st place overall. My team and I created: SG60 Portal App, an all-in-one one-stop platform for SG60 related matters, targeted towards the general public."
              }
              imageUrl={"fa-brands fa-app-store-ios"}
              imageSrc={"/assets/logos/spnsc.webp"}
              link={"https://devpost.com/software/sg60portal"}
              github={"https://github.com/tedydevmac/SP_NSComp.git"}
              iconHover={true}
              expanddesc={
                "The hackathon's theme was SG60. We realised that other teams would likely want to focus on one specific feature/idea that they would want to have to satisfy the SG60 theme.\nHence, in order to outshine the rest, our idea was to simply just include every possible creative feature we could think of related to this theme: to add as many technically impressive features as possible. As a result, it worked!"
              }
              skills={["Swift", "SwiftUI", "ML/CV", "APIs"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/astrigue/PHOTO-2024-04-06-14-20-19.webp",
                "/assets/astrigue/IMG_1656.webp",
              ]}
              title={"Raffles Astronomy Astrigue' 24 Nocturne"}
              description={
                "Won 3rd place overall. A competition held by Raffles Astronomy Club where we were tested on our knowledge regarding Astronomy and Space Science."
              }
              imageUrl={"fa-solid fa-earth-europe"}
              imageSrc={"/assets/logos/astrigue.webp"}
              iconHover={false}
              expanddesc={
                "Organised by Raffles Institution Astronomy Club, Astrigue 2024 was organised on 6 April 2024 on a Saturday morning at Raffles Institution Campus.\n\nThe Astrigue competitions aims to foster a love for astronomy by offering students a unique and engaging competition experience. It is designed to be both fun and competitive, providing students with various opportunities to showcase their knowledge and passion for astronomy and connect with like-minded students.\n\nAstrigue consists of three segments: the Project Round (submitted pre-event) and MCQ will contribute towards teams' eligibility for the Finals. The Amazing Race carries noweightage and aims to expose students' to the diverse disciplines within astronomy through educational and fun games and activities.\n\nSST team 3 came in 3rd place. The team consists of GAVRIEL CHIA KAI ZE S3-05, TEH TIAN CHENG S3-02, NAGARAJAN VIMAL BALAJI S3-02, and GOH MIN WEN, TED, S3-03."
              }
              skills={["Astronomy / Space Science"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/bb/6.webp",
                "/assets/bb/1.webp",
                "/assets/bb/2.webp",
                "/assets/bb/3.webp",
                "/assets/bb/4.webp",
                "/assets/bb/5.webp",
                "/assets/bb/6.webp",
                "/assets/bb/7.webp",
              ]}
              title={"BuildingBloCS 2025"}
              description={
                "Created Computer Vision models to improve accessiblity for the deaf and blind to help them better navigate this world, bundled in an app for everyday use."
              }
              imageUrl={"fa-solid fa-universal-access"}
              imageSrc={"/assets/logos/buildingblocs.webp"}
              iconHover={false}
              expanddesc={
                "The hackathon's theme was: How may we improve accessibility and empower the disadvantaged and disabled in our society?\n\nWe then came together and discussed about what we thought would be the most prevalent issues that have not completely been addressed in today's society. Namely, surrounding awareness for the blind and the ability for abled people to communicate with the deaf.\n\nOur idea?\nFor the blind, most would carry around a walking stick to feel out things in front of them. Hence, we created an object detection model that would be able to detect and read out objects near them based on their positions.\nFor the deaf? Most abled people are not familiar with sign language. Hence, when both parties attempt to communicate, they resort to using simple hand gestures and signals. But what if they wanted to convey more complex sentences, like names of places or specific transportation directions?\n\nHence, to bridge this gap, we came up with solutions for both sides.\nFor the abled person, they would be able to use our app and point their phones towards the deaf person, and using our CV model, the app would be able to translate the sequence of sign languages into full sentences.\nOn the deaf person's side, we used a voice to text model such that they can understand what someone else is speaking to them. All of this were then bundled into a user-friendly app."
              }
              skills={[
                "Python",
                "PyTorch",
                "NumPy",
                "OpenCV",
                "Streamlit",
                "Computer Vision",
                "ML",
              ]}
              github={"https://github.com/tedydevmac/buildingblocs_I27.git"}
            />
            <Card
              title="SUTD What The Hack 2024"
              description="For this hackathon, we built an AI enabled Chrome extension that tackles inequality regarding LGBTQ+ and minority groups."
              imageUrl="fa-brands fa-chrome"
              imageSrc={"/assets/logos/sutdwth.webp"}
              link={"https://devpost.com/software/raydar-8dh1xi"}
              github={"https://github.com/tedydevmac/RAYdar.git"}
              iconHover={true}
              tooBig={false}
              singleImage={false}
              images={formatMediaArray([
                "/assets/sutdwth/RAYdar.webp",
                "/assets/sutdwth/1.mp4",
                "/assets/sutdwth/2.mp4",
                "/assets/sutdwth/1.webp",
              ])}
              expanddesc={
                "Inspiration:\nOur team realised that offensive messages are rampant in social media. Hence, we created a machine learning model to detect offensive messages against the LGBTQ+, different races and ethinicity and more groups.\n\nWhat it does:\nIt has 2 sub-features, a scanning feature and a typing check feature.\nScanning when the user opens the extension menu, a pop-up wil show with a scan button, where the user can click the button in order to scan all the text inside the text input to see how offensive it is.\nTyping check when the user is typing in a messaging app such as discord or telegram, what they are typing is checked in order to check for any hateful words or phrases in what they typed. If what they typed is hateful, the app will send them an alert warning them that their message is hateful, and advise them to change their language to something more constructive.\n\nHow we built it:\nWe used tensorflow to create the machine learning model in python. Then we used react to create the chrome extension. We used flask so that we can recieve the information from the model."
              }
              skills={[
                "Python",
                "TensorFlow",
                "Flask",
                "React",
                "Chrome Extension",
                "ML",
              ]}
            />
            <Card
              title={"BlahajCTF 2024"}
              description={
                "This was my first CTF experience. It was an online competition where we spent all day solving cybersecurity-related problems to gather as many points as possible."
              }
              imageUrl={"fa-solid fa-flag"}
              imageSrc={"/assets/logos/blahajctf.webp"}
              iconHover={false}
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/blahaj/blahaj1.webp",
                "/assets/blahaj/blahaj2.webp",
                "/assets/blahaj/blahaj3.webp",
                "/assets/blahaj/blahaj4.webp",
              ]}
              expanddesc={
                "This was my first ever external competitive CTF competition that I have joined.\nI had done CTFs before in school hosted by SST Inc, but those had more beginner level questions. The questions I encountered were MUCH more difficult. \nLuckily, I had attended their training beforehand and I was able to solve a surpising amount of questions with the help of my teammates. Unfortuantely, despite our best efforts, we only managed to reach the top 30 teams and did not make it to the finals.\nHowever, I think it was still a good learning experience in the area of cybersecurity."
              }
              skills={["Cybersecurity", "CTF", "Python"]}
            />

            <Card
              tooBig={false}
              singleImage={true}
              images={["/assets/noi/COP_Prelim.webp"]}
              title={"National Olympiad in Informatics (NOI) 2025"}
              description={"Obtained Participation. My first NOI competition."}
              imageUrl={"fa-solid fa-computer"}
              imageSrc={"/assets/logos/noi.webp"}
              link={"https://noisg.comp.nus.edu.sg/noi/"}
              iconHover={false}
              expanddesc={
                "A huge step up from the usual Perse competitions. This was the first NOI competition that I have joined.\nI found it very thrilling and satisfying as I worked on the problems sets. Even though I did not make it to the Top 5 scorers, I found it to be a good learning experience regarding competitve programming."
              }
              skills={["Python", "Algorithms", "Competitive Programming"]}
            />

            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/perse/persecc.webp",
                "/assets/perse/persecc2.webp",
              ]}
              title={"Perse Coding Challenge 2023 - 2025"}
              description={
                "Won Distinction - Best in School award in 2023, Won Distinction in 2025"
              }
              imageUrl={"fa-solid fa-terminal"}
              imageSrc={"/assets/logos/persecc.webp"}
              link={"https://pctc.perse.co.uk/"}
              iconHover={false}
              expanddesc={""}
              skills={["Python"]}
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
              images={formatMediaArray([
                "/assets/idc/1.webp",
                "/assets/idc/2.webp",
                "/assets/idc/3.webp",
                "/assets/idc/iDC.mp4",
                "/assets/idc/IDC_Poster.webp",
              ])}
              title={"IDP Integrated Design Challenge 2025"}
              description={
                "A challenge where we had to create an autonomous robot vehicle that uses computer vision to transport food."
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.webp"}
              iconHover={false}
              github={"https://github.com/tedydevmac/Grp6_IDC2025.git"}
              link={
                "https://drive.google.com/file/d/1v2G0EKmlFMlNwvyaGOTU0VKhib6kxSia/view?usp=sharing"
              }
              expanddesc={
                "Watch the video in the 4th selection in the image carousel above to understand the project's background information and learn about our prototype iterations until the final product!"
              }
              skills={[
                "Python",
                "C++",
                "Arduino",
                "Tensorflow",
                "OpenCV",
                "Robotics",
                "Hardware-Software Integration",
              ]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/artc/1.JPG",
                "/assets/artc/2.JPG",
                "/assets/artc/3.jpeg",
              ]}
              title={"IDP ARTC-SST Innovation Camp 2024"}
              description={
                "An innovation camp where my team and I developed a smart hydroponics system to boost plant growth and reduce worker labour. Won Sustainable Solution Award."
              }
              imageUrl={"fa-solid fa-gear"}
              imageSrc={"/assets/logos/sst.webp"}
              link={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              iconHover={false}
              expanddesc={
                "Problem Statement: Urban areas face challenges related to food security, access to fresh produce, and sustainable agriculture practices, impacting community health and resilience.\nTask: Create a prototype for an urban farming solution that promotes local food production, reduces food miles, and fosters community engagement. Your prototype could focus on individual gardening innovations or community-based farming initiatives.\n\nOur idea to address this task was to have a hydroponics system with sensors to monitor water flow rate through the soil and monitor the soil's moisture levels, which are all displayed on an LCD screen as well as in a mobile app.\nThe hydroponics system would have a water pump which strength can be adjusted through the mobile app connected to the Arduino.\n\nOur prototype allows workers to monitor the plants and make adjustments through a mobile app which can be remotely accessed anywhere, this reduces the workload of workers and improve the monitoring of plants as they do not have to go on-site manually to checkup on the hydroponic system."
              }
              skills={["C++", "Arduino", "Mobile App"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/bigd/1.jpeg",
                "/assets/bigd/2.jpeg",
                "/assets/bigd/3.jpeg",
              ]}
              title={"IDP SUTD-SST-NP Big-D Camp 2025"}
              description={
                "A 3-day camp where we worked on building a remote controlled robot for post disaster debris management."
              }
              imageUrl={"fa-solid fa-robot"}
              imageSrc={"/assets/logos/sst.webp"}
              iconHover={false}
              github={"https://github.com/tedydevmac/SSTSUTDBigD.git"}
              expanddesc={
                "Our idea for a item gripper was to simply have an extended catcher with a door at the front that can lift and close. A simple yet effective method which worked on the field."
              }
              skills={["C++", "Arduino", "Robotics"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/python.webp"]}
              title="Cyberbullying vs AI - S3 Computing+ Coursework "
              description="This project focuses on detecting and classifying cyberbullying in text, particularly against the LGBTQ community and minority groups."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/assets/logos/python.webp"}
              github={"https://github.com/tedydevmac/S3T3CPPT.git"}
              link={
                "https://docs.google.com/document/d/1t9lWB5FNScD1uBwtiT4moFpeDlCKkQUH6k6aTejy6EY/edit?usp=sharing"
              }
              iconHover={false}
              expanddesc={
                "In the digital age, cyberbullying has become a pervasive issue, causing significant psychological harm to individuals. One particularly vulnerable group is the LGBTQ+ community, who often face targeted harassment based on their sexual orientation. This project aims to develop a machine learning model to detect instances of cyberbullying specifically related to homosexuality.\n\nThis model is trained to detect messages against the LGBTQ+. This model can detect messages against specific groups inside and outside of the LGBTQ+. The datasets chosen include offensive messages and non offensive messages to those of the various groups. The datasets show which ones are offensive to a particular group and those that are not offensive to any group at all. This would help to train the model so that it would be able to identify which message is offensive to what group and classify it accordingly.\n\nTry the model yourself by getting this project from the linked GitHub!"
              }
              skills={["Python", "ML", "Scikit-learn", "Pandas", "NumPy"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/s4cp/bff6bfe6-f469-461f-956d-33862f3d3e63.JPG"]}
              title="Virtual Photobooth - S4 Computing+ Coursework "
              description="A virtual photobooth which involved landmarking the face to place virtual props on the user's face, bundled into an interactive experience aimed to serve as a meaningful addition to SST Celebrations."
              imageUrl="fa-solid fa-brain"
              imageSrc={"/assets/logos/python.webp"}
              github={"https://github.com/tedydevmac/py-photobooth.git"}
              iconHover={false}
              expanddesc={
                "Our virtual photobooth has three types of props.\n\nFirstly, House Masks and Glasses. These represent the various houses in SST, fostering a strong sense of identity and unity among students and staff. They serve as a nostalgic reminder of past house events, allowing individuals to showcase their house pride and connection while celebrating the special occasion.\n\nSecondly, Speech bubbles with customisable text. To make the photobooth experience more personal and meaningful, we have included speech bubbles where guests can write custom messages, allowing students, staff, alumni, parents, and industry partners to express their thoughts and reflections on SST's journey. For example, students and staff may share their favorite memories or how SST has shaped their growth, parents may share the impact of SST on their child's education and development, and industry partners may express appreciation for their collaboration with SST.\n\nLastly, Visitor Masks. These masks are to show that these people are visiting SST for the first itme and to promote inclusivity. It shows that everyone is welcome to celebrate SST's 15th anniversary. The mask is purple to showcase that these people are not in any house and to show that they are new to the school.\n\nAnother feature that we added is some lore drops. After they choose a prop, they will see some text that will inform them about the prop they are choosing. This will help those new to SST understand the significance behind the props. For example, the house props include what house and some of the values of the house.\n\nBy offering these personalization features, the photobooth becomes more than just a fun activity—it transforms into a platform for guests to share their experiences and appreciation for SST using their own words.\n\n Try this photobooth yourself by getting the project from the linked GitHub!"
              }
              skills={["Python", "OpenCV", "NumPy", "Computer Vision"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={[
                "/assets/s1cm3m/1.jpeg",
                "/assets/s1cm3m/2.png",
                "/assets/s1cm3m/3.png",
                "/assets/s1cm3m/4.png",
              ]}
              title="Sec 1 3M ChangeMakers InnoScience Challenge 2022"
              description="Won Best ICT Award. Created a prototype powered by sensors to preserve food as long as possible."
              imageUrl="fa-solid fa-bowl-food"
              imageSrc={"/assets/logos/sst.webp"}
              iconHover={false}
              expanddesc={
                "Challenge Statement:\nF&B shop owners needs to be able to handle leftover food efficiently and the right way because it is difficult to handle the leftover food and prevent the food from going bad. How might we allow the shop owners to be clear of what they have to do in order to save as much leftover food as possible through a product that can help them kill bacteria, store food, and measure the temperature of the food so that the leftover food can be kept fresh and be reused. So that the more leftover food can be sold once again to customers, thereby reducing the amount of thrown food, reducing the amount of food waste produced.\n\n Our idea:\nMake an appliance that contains an UV light bar that can shine UV rays onto leftover food to kill bacteria to keep the leftover food fresh, and then containing an insulated area to store the leftover food where there are also infrared heat sensors to detect the temperature of the food and telling the shop owners the temperature they have to store the food at to keep it as fresh as possible for as long as possible."
              }
              skills={["C++", "Arduino"]}
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
                "A Telegram bot to assist students in their school work management. Created during the workshop on creating Telegram bots during the pre-camp."
              }
              skills={["Python", "Telegram Bot", "APIs"]}
            />
            <Card
              tooBig={false}
              singleImage={false}
              images={["/assets/logos/sst.webp"]}
              title="WorkBud - S2 ChangeMakers Project"
              description="A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group. Made using Flutter."
              imageUrl="fa-solid fa-dumbbell"
              imageSrc={"/assets/logos/sst.webp"}
              github={"https://github.com/tedydevmac/innofest-app.git"}
              iconHover={false}
              expanddesc={
                "A self-help application to educate and teach SSTudents how to exercise properly by providing guides and instructions to execute certain common exercises based on muscle group or target group. Made using Flutter."
              }
              skills={["Flutter", "Cross-platform", "Mobile App"]}
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
                        loading="lazy"
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
