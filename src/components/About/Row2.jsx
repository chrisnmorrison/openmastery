import Link from "@docusaurus/Link";
import React from "react";
import Pine from "./pine-tree.png";

function Row2() {
  return (
    <>
      <div className="row-2-container">
        <h2>Current Cause</h2>
        <div>We are currently donating to:</div>
        <div className="current-cause">
          <img src={Pine} width={30} />
          <div>Reforestation</div>
        </div>

        <p>
          Our global ecosystem is crumbling, and climate change is negatively
          impacting the Earth. Careless corporations continue to pollute without
          caring about efforts to preserve ecosystems. Luckily, there are many
          charities working incredibly hard to replenish destroyed ecosystems,
          which bring our Earth closer to the balance it deserves. Our current
          charity of choice:
        </p>
        <p className="current-charity">Eden Reforestation Projects</p>
        <p>
          <strong>From their website:</strong> "At the center of Eden
          Reforestation Projects is our relationships with local communities. We
          work alongside them to produce, plant, and protect tens of millions of
          trees every month, thereby creating jobs to support them in restoring
          their local environment and economy long-term. Working in extremely
          remote settings, our national directors lead these communities with
          grit and relentless determination through a range of challenges, from
          extreme weather and landslides, to poachers, bandits, and wild
          animals."
          <a
            href="https://www.edenprojects.org/our-work"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}Learn more about their work
          </a>
          .
        </p>
        <p className="row-2-footnote">
          *The charities we support do not sponsor us. We carefully and
          independently select reputable, successful charities based on
          transparent financials, successful initiatives, and rating on
          charitynavigator.org
        </p>
      </div>
    </>
  );
}

export default Row2;
