import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import p1_link from "../Assets/BlogSpot.png";
import p2_link from "../Assets/Ptal-Clone.png";
import p3_link from "../Assets/p3_link.png";
import p4_link from "../Assets/p4_link.png";
import Resume from "../Assets/Latest_Resume.pdf";
const Homepage = () => {
  const Project_list = [
    {
      title: "OpenEcho Blog Website",
      img_link: p1_link,
      desc: `I built a responsive web blog app using React and Vite, featuring user authentication, CRUD operations, and a TinyMCE editor for rich text formatting. The app, designed with Tailwind CSS and optimized with Redux Toolkit and React Hook Forms, allows users to add featured images to posts. Backend services are managed by Appwrite. Deployed on VercelI built a responsive web blog app using React and Vite, featuring user authentication, CRUD operations, and a TinyMCE editor for rich text formatting. The app, designed with Tailwind CSS and optimized with Redux Toolkit and React Hook Forms, allows users to add featured images to posts. Backend services are managed by Appwrite. Deployed on Vercel`,
      pos: "Frontend Developer",
    },
    {
      title: "Ecommerce Website P-Tal Clone",
      img_link: p2_link,
      desc: `It was my very first try to clone a website. This was a E-commerce website. I tried my best to copy most of the functionalities I could in a small span of time. While working with this project allowed me to sharpen up my skills on Front-End Development too. Link to the original Website :- https://ptal.inIt was my very first try to clone a website. This was a E-commerce website. I tried my best to copy most of the functionalities I could in a small span of time. While working with this project allowed me to sharpen up my skills on Front-End Development too. Link to the original Website :- https://ptal.in`,
      pos: "Frontend Developer",
    },
    {
      title: "Calculator Application",
      img_link: p3_link,
      desc: "I developed a Calculator Application with three switchable modes. It functions effectively as a basic calculator and significantly enhanced my skills in React.js. Through this project, I gained a deeper understanding of basic hooks like useState and useEffect, improved my JavaScript proficiency, and learned to use CSS variables to my advantage for better styling and theme management.",
      pos: "Frontend Learner",
    },
    {
      title: "Cricket Console Game",
      img_link: p4_link,
      desc: `Successfully completed a coding challenge by creating a console game, earning 1st prize for the implementation. Developed a Cricket Game on console using CPP, leveraging the provided basic layout from the manual and independently determining the entire game logic`,
      pos: "",
    },
  ];
  const techStack = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "Node.js",
    "C",
    "CPP",
    "Java",
    "python",
    "React.js",
    "Appwrite",
    "Firebase",
    "MERN",
    "MongoDb",
    "MYSQL",
    "Next.jS",
  ];
  const [currProject, setCurrProject] = useState(1);
  function nextProject() {
    if (currProject !== Project_list.length) {
      document.documentElement.style.setProperty(
        "--progress",
        `${(100 / Project_list.length) * (currProject + 1)}%`
      );
      setCurrProject(currProject + 1);
    }
  }
  function decProject() {
    if (currProject - 1 > 0) {
      document.documentElement.style.setProperty(
        "--progress",
        `${(100 / Project_list.length) * (currProject - 1)}%`
      );
      setCurrProject(currProject - 1);
    }
  }
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--progress",
      `${100 / Project_list.length}%`
    );
  }, [Project_list.length]);
  return (
    <div className="homepage">
      <header className="primary-header">
        <nav className="nav-menu">
          <div className="nav-items">
            <a href="#home">
              <span>{"//01."}</span>
              {"<Home/>"}
            </a>
            <a href="#portfolio">
              <span>{"//02."}</span>
              {"<Portfolio/>"}
            </a>
          </div>
          <div className="nav-items nav-item-2">
            <a href="#techstack">
              <span>{"//03."}</span>
              {"<Tech Stack/>"}
            </a>
            <a href="#contact">
              <span>{"//04."}</span>
              {"<Contact/>"}
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section id="home">
          <div className="heading-content">
            <div className="heading-blocks">
              {"<p>"}
              <span className="green-txt">This is</span>
              {"</p>"}
            </div>
            <div className="heading-blocks indent-2">
              {"<h1>"}
              <h1>Priyanshu Agarwal</h1>
              {"</h1>"}
            </div>
            <div className="heading-blocks">
              {"<p>"}
              <h3 className="green-txt">Frontend Web developer</h3>
              {"</p>"}
            </div>
          </div>
          <div className="download_btn">
            <div className="circle-1 circles"></div>
            <div className="circle-2 circles"></div>
            <a href={Resume} className="download_link green-txt">
              {"<Download CV/>"}
            </a>
          </div>
          <div className="custom_path">
            <div className="box-1"></div>
            <div className="box-2"></div>
          </div>
        </section>
        <section id="portfolio">
          <div className="heading-blocks indent-2 centered_headings">
            <span className="al-left">{"</h2>"}</span>
            <h2>MY PortfoLio</h2>
            <span className="al-right">{"</h2>"}</span>
          </div>
          <div className="porfolio_content">
            <div className="project_demo_area">
              <img
                src={Project_list[currProject - 1].img_link}
                alt="Project Demo"
              />
            </div>
            <div className="project_desc">
              <motion.div
                className="tubelight"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 2,
                }}
              ></motion.div>
              {"<p>"}
              <h4 className="indent-2">
                {Project_list[currProject - 1].title}
              </h4>
              <p className="indent-2">{Project_list[currProject - 1].desc}</p>
              <h3 className="designation indent-2">
                {Project_list[currProject - 1].pos}
              </h3>
              <br />
              {"</p>"}
            </div>
          </div>
          <div className="slider">
            <div className="custom_path-tp"></div>
            <div className="slider_btns" id="decr_btn" onClick={decProject}>
              <FaAngleLeft className="custom_arrows"></FaAngleLeft>
            </div>
            <div className="progress_bar"></div>
            <div className="slider_btns" id="incr_btn" onClick={nextProject}>
              <FaAngleRight className="custom_arrows"></FaAngleRight>
            </div>
            <div className="custom_path-btm"></div>
          </div>
        </section>
        <div className="divider-1"></div>
        <section id="techstack">
          <div className="heading-blocks indent-2 centered_headings">
            <span className="al-left">{"</h2>"}</span>
            <h2>Tech Stack</h2>
            <span className="al-right">{"</h2>"}</span>
          </div>
          <div className="bubble_container techStack-container">
            {techStack.map((skill) => (
              <a href="/" className="bubble techStack" id={skill}>
                <span>{"<>"}</span>
                <p>{skill}</p>
                <span>{"</>"}</span>
              </a>
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="connector"></div>
          <div className="heading-blocks indent-2 centered_headings">
            <span className="al-left">{"</h2>"}</span>
            <h2>Connect with me</h2>
            <span className="al-right">{"</h2>"}</span>
          </div>
          <div className="bubble_container">
            <a
              href="https://www.instagram.com/priyanshu_ag1/"
              className="bubble"
              id="insta"
            >
              <span>{"<>"}</span>
              <p>Instagram</p>
              <span>{"</>"}</span>
            </a>
            <a
              href="https://github.com/Priyanshu4206"
              className="bubble"
              id="twitter"
            >
              <span>{"<>"}</span>
              <p>Github</p>
              <span>{"</>"}</span>
            </a>
            <a
              href="https://linkedin.com/in/priyanshu-ag4206"
              className="bubble"
              id="linkedin"
            >
              <span>{"<>"}</span>
              <p>Linkedin</p>
              <span>{"</>"}</span>
            </a>
            <div
              onClick={() =>
                (window.location = "mailto:agarwalpriyanshu168@gmail.com")
              }
              className="bubble"
              id="gmail"
            >
              <span>{"<>"}</span>
              <p>Gmail</p>
              <span>{"</>"}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
