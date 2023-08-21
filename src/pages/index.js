import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import supportImg from "../../static/img/save-the-world.png";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg home-button"
            to="/courses"
          >
            Browse All Categories 📚
          </Link>
          <Link
            className="button button--secondary button--lg home-button"
            to="/about"
          >
            Learn More 📜
          </Link>
        </div>
      </div>
    </header>
  );
}

function AlphaMessage() {
  return (
    <div className="home-top-banner">
      <img src={supportImg} width={60} />
      <p>
        Open Mastery is raising money for environmental causes. We are looking for amazing people to help us build our platform.
      </p>
      <p>You can help us raise money for important causes without making direct donations.</p>
      <p>
        <Link to="/support-us">Find out how you can support us</Link>
      </p>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Welcome to Open Mastery. We offer free text-based courses, and just by using our website, you are raising money for charity!"
    >
      {" "}
      <AlphaMessage />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
