import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./styles.module.css";
import pythonImg from "@site/static/img/python.png";
import javaImg from "@site/static/img/javalogo.png";
import comingSoon from "@site/static/img/coming-soon.png";

function Categories() {
  const pythonYellow = "#EDE070";
  const javaOrange = "rgb(255, 82, 82)";
  const purple = "#D19BFB";
  const green = "#C9E77A";
  const openmasteryBlue = "#3F92FC";

  const allCourses = [
    {
      name: "Python",
      imgUrl: pythonImg,
      link: "/learn/python/course-entry",
      backgroundCol: pythonYellow,
      category: "Programming",
    },
    {
      name: "Java",
      imgUrl: javaImg,
      link: "/learn/java/course-entry",
      backgroundCol: javaOrange,
      category: "Programming",
    },
    {
      name: "More Coming Soon!",
      imgUrl: comingSoon,
      link: "#",
      placeholder: true,
      backgroundCol: openmasteryBlue,
    },
  ];

  const moreComingSoon = {
    name: "More Coming Soon!",
    imgUrl: comingSoon,
    link: "#",
    placeholder: true,
    backgroundCol: openmasteryBlue,
  };

  return (
    <Layout title="Categories">
      <div class="category-page">
        <h2 className="category-heading">Categories</h2>
        <Tabs className={styles.tabs}>
          <TabItem
            value="Programming"
            label="Programming"
            attributes={{ className: styles.red }}
          >
            <div className="category-list">
              {" "}
              {allCourses.map((item) => {
                if (item.category === "Programming") {
                  return (
                    <div>
                      <a
                        className="category-item"
                        style={{ borderColor: item.backgroundCol }}
                        href={item.link}
                      >
                        <a>
                          <div className="category-info">
                            <img
                              className="category-icon"
                              src={item.imgUrl}
                              alt=""
                            ></img>
                            <span className="category-name">{item.name}</span>
                          </div>
                        </a>
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          </TabItem>
          <TabItem
            value="Data Science"
            label="Data Science"
            attributes={{ className: styles.orange }}
          >
            {allCourses.map((item) => {
              if (item.category === "Data Science") {
                return (
                  <div>
                    <a
                      className="category-item"
                      style={{ borderColor: item.backgroundCol }}
                      href={item.link}
                    >
                      <a>
                        <div className="category-info">
                          <img
                            className="category-icon"
                            src={item.imgUrl}
                            alt=""
                          ></img>
                          <span className="category-name">{item.name}</span>
                        </div>
                      </a>
                    </a>
                  </div>
                );
              }
            })}
          </TabItem>
          <TabItem
            value="Theory"
            label="Theory"
            attributes={{ className: styles.blue }}
          >
            {allCourses.map((item) => {
              if (item.category === "Theory") {
                return (
                  <div>
                    <a
                      className="category-item"
                      style={{ borderColor: item.backgroundCol }}
                      href={item.link}
                    >
                      <a>
                        <div className="category-info">
                          <img
                            className="category-icon"
                            src={item.imgUrl}
                            alt=""
                          ></img>
                          <span className="category-name">{item.name}</span>
                        </div>
                      </a>
                    </a>
                  </div>
                );
              }
            })}
          </TabItem>
        </Tabs>

        <p className="category-description">
          Are you interested in sharing your knowledge with the world?{" "}
          <a
            href="https://github.com/chrisnmorrison/openmastery/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about contributing
          </a>{" "}
          to Open Mastery!
        </p>
      </div>
    </Layout>
  );
}

export default Categories;
