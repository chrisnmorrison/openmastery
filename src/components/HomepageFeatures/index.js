import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Free Forever",
    Svg: require("../../../static/img/undraw_book_reading.svg").default,
    description: (
      <>
        Open Ed is powered by individuals who value the importance of free
        education
      </>
    ),
  },
  {
    title: "Simply Explained",
    Svg: require("../../../static/img/undraw_teaching.svg").default,
    description: (
      <>
        All of our courses use easy-to-understand English, while still covering
        the most important topics
      </>
    ),
  },
  {
    title: "Powered by Community",
    Svg: require("../../../static/img/undraw_Books.svg").default,
    description: (
      <>
        Our courses come from various experts, who collaborate to ensure the
        best learning experience
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
