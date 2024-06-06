import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import eg_link from "../Assets/Demo_project_img.png";
const Homepage = () => {
  const Project_list = [
    {
      title: "Project Title 1",
      img_link: eg_link,
      desc: `Project Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo reprehenderit cumque aperiam, corporis voluptatem veritatis tempore minus dignissimos, illum aliquid blanditiis doloribus distinctio fuga inventore ut dolorum, optio accusantium? `,
      pos: "Frontend Developer",
    },
    {
      title: "Project Title 2",
      img_link: eg_link,
      desc: `Project Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo reprehenderit cumque aperiam, corporis voluptatem veritatis tempore minus dignissimos, illum aliquid blanditiis doloribus distinctio fuga inventore ut dolorum, optio accusantium? `,
      pos: "Frontend Developer",
    },
    {
      title: "Project Title 3",
      img_link: eg_link,
      desc: `Project Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo reprehenderit cumque aperiam, corporis voluptatem veritatis tempore minus dignissimos, illum aliquid blanditiis doloribus distinctio fuga inventore ut dolorum, optio accusantium? `,
      pos: "Frontend Developer",
    },
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
  }, []);
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
            <a href="/" className="download_link green-txt">
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
