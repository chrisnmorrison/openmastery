import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BetaImg from "../../static/img/testing.png";

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
            to="/categories"
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
    <div className="home-alpha-message">
      <img src={BetaImg} width={100} />
      <p>
        Open Ed is currently in beta development, and until we are live, we are
        currently not fundraising. Our efforts are focused on adding content to
        Open Ed.
      </p>{" "}
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
      description="Welcome to Open Ed. We offer free text-based courses, and just by using our website, you are raising money for charity!"
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
