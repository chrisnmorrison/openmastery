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
      description="Welcome to Open Mastery. We offer free text-based courses, and just by using our website, you are raising money for charity!"
    >
      <h1 className="page-heading">Donations</h1>
      <div className="container">
        {" "}
        <p>
          As we expand Open Mastery, our primary goals are giving back, and
          transparency. Advertising not only supports our growth and
          maintenance, but supports charity! <strong>We donate 100% of our net
            proceeds to charity</strong>, and you can read about the charities we donate to
          on our <Link to="/about">About Us page</Link>.
        </p>
        <p><strong>Why 100%?</strong> We are completely community run, so it
         would be unfair for us to profit off of our contributors
          who volunteer their time to help us promote free education.</p>
          <p>Simply, we use our proceeds to keep us afloat (hosting, domain name, etc.), and the rest goes to charity.</p>
        <h2>Donations</h2>
        <p>
    As soon as our fundraising campaign kicks off, you'll find an updated list showcasing our ongoing charitable donations right here.
</p>
<p>
    At this stage, our main focus is on connecting with enthusiastic supporters and contributors who resonate with our mission and principles.
    
    
   
</p>
<p> <Link to="/support-us">Discover ways to join and support our cause</Link>.</p>
      </div>
    </Layout>
  );
}
