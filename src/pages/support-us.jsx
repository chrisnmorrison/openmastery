import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Bmc from "../../static/img/bmc-logo-no-background.png";
import Github from "../../static/img/github.png";
import SocialMedia from "../../static/img/social-media.png";

const Support = () => {
  return (
    <Layout>
      <div className="container support-container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-title categories-title">Support Us</h1>
            <p>
              Open Mastery and its contributors provide free text-based courses
              in as growing number of areas. We will remain free forever, which
              is only possible with the help of our supporters!
            </p>
            <p>There are a few ways you can support us:</p>

            {/* Item */}
            <div className="support-item">
              <div>
                <a
                  className="support-link"
                  href="https://www.buymeacoffee.com/chrismorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Bmc}
                    alt="buy me a coffee logo"
                    className="support-img support-img-bmc"
                  />
                </a>
              </div>
              <div>
                <h2 class="support-title">Buy Me a Coffee</h2>
                <p>
                  Support Open Mastery's founder and primary maintainer. Part of
                  your donations go to maintaining Open Mastery, and part of
                  your donations are donated to charity.
                </p>
                <a
                  className="support-link"
                  href="https://www.buymeacoffee.com/chrismorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Me a Coffee
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="support-item">
              <div>
                <a
                  className="support-link"
                  href="https://github.com/chrisnmorrison/openmastery/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="github logo" className="support-img" />
                </a>
              </div>
              <div>
                <h2 class="support-title">Write for us</h2>
                <p>
                  Our mission is to create a huge catalog of free courses, and
                  this is only possible with support from knowledgeable people!
                  We're always looking for writers to create and edit courses.
                </p>
                <a
                  className="support-link"
                  href="https://github.com/chrisnmorrison/openmastery/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find out how to contribute
                </a>
              </div>
            </div>
            {/* Item */}
            <div className="support-item">
              <div>
              <a
                  className="support-link"
                  href="https://www.buymeacoffee.com/chrismorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                ><img
                  src={SocialMedia}
                  alt="various social media icons"
                  className="support-img"
                /></a>
                
              </div>
              <div>
                <h2 class="support-title">Share us with the world</h2>
                <p>
                  Who doesn't like free learning? If you like our work, share
                  our articles with your friends, family, on Reddit, or anywhere
                  else. This is the easiest way to support us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </Layout>
  );
};

export default Support;
