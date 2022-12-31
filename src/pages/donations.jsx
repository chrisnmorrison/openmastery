import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Welcome to Open Education. We offer free text-based courses, and just by using our website, you are raising money for charity!"
    >
      <h1 className="page-heading">Donations</h1>
      <div className="container">
        {" "}
        <p>
          As we expand Open Education, our primary goals are giving back, and
          transparency. Advertising not only supports our growth and
          maintenance, but supports charity! We currently donate 90% of our
          proceeds to charity, and you can read about the charities we donate to
          on our <Link to="/about">About Us page</Link>.
        </p>
        <p>
          We are currently in an beta stage of development, where we're focusing
          on adding content, creating pages, adding background information, and
          sorting out our finer details.
        </p>
        <p>
          Therefore, <strong>we are currently not focused on financials</strong>
          . Once we are up-and-running and raising funds for charity, this page
          will contain our financial information, proof of donations, and
          everything related to our financial transparency.
        </p>
        <p>
          For now, we are looking for awesome supporters who share our mission
          and values. <Link to="/support-us">Learn how you can support us</Link>
          .
        </p>
      </div>
    </Layout>
  );
}
