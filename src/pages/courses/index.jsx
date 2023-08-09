import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./styles.module.css";
import pythonImg from "@site/static/img/python.png";
import javaImg from "@site/static/img/javalogo.png";
import comingSoon from "@site/static/img/coming-soon.png";

function CategoryItem({ item }) {
  return (
    <a
      className={`category-item ${styles.categoryItem}`}
      style={{ borderColor: item.backgroundCol }}
      href={item.link}
    >
      <div className="category-info">
        <img className="category-icon" src={item.imgUrl} alt="" />
        <span className="category-name">{item.name}</span>
      </div>
    </a>
  );
}

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
      category: 'All',
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
    <Layout title="Courses">
      <div class="category-page">
        <h2 className="category-heading">Courses</h2>
        <Tabs className={styles.tabs}>
          <TabItem
            value="Programming"
            label="Programming"
            attributes={{ className: styles.red }}
          >
            <div className="category-list">
              {" "}
              {allCourses.map((item, index) => {
                if (item.category === "Programming" || item.category === 'All') {
                  return (
                    <CategoryItem key={index} item={item} />
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
            <div className="category-list">

              {allCourses.map((item, index) => {
                if (item.category === "Data Science" || item.category === 'All') {
                  return (
                    <CategoryItem key={index} item={item} />
                  );
                }
              })}
            </div>
          </TabItem>
          <TabItem
            value="Theory"
            label="Theory"
            attributes={{ className: styles.blue }}
          >
            <div className="category-list">

              {allCourses.map((item, index) => {
                if (item.category === "Theory" || item.category === 'All') {
                  return (
                    <CategoryItem key={index} item={item} />
                  );
                }
              })}
            </div>
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
