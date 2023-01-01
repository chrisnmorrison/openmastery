import React from 'react'
import styled from 'styled-components'
import { AiOutlineDeploymentUnit, AiOutlineRead } from 'react-icons/ai'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* <h1 className="our-story-title">Our Story</h1> */}
        <div className="row">
          <div className="col-lg-7">
            <div className="about-card">
              <AiOutlineRead className="icon" />
              <h3>Vision</h3>
              <p>
                  Sharing information has never been so easy and accessible. We
                  envision a world where both paid education and free
                  educational resources online are equally as valuable.
                </p>
                <p>
                  Quite simply, Open Ed is our way of making free education easy
                  to find and use. Our amazing contributors have 
                </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card">
              <AiOutlineDeploymentUnit className="icon" />
              <h3>Mission</h3>
              <p>
                  We value free online learning, and we want everyone to share
                  our values. Free learning allows everyone to educate
                  themselves, to improve their decision making ability, and
                  empowers many to seek knowledge that may have been harder to
                  access in the past.
                </p>
                <p>
                  We're showing the world that free online learning is a good
                  thing, and we're facilitating lifelong learners to empower
                  themselves.
                </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;

  .about-us-title {
    margin-bottom: 4rem;
    font-size: 180%;
  }

  .about-card {
    background-color: #f8fbff;
    padding: 40px;
    border-radius: 5px;
    min-height: 464px;
  }

  .our-story-title{
    margin-bottom: 3rem;
  }

  .icon {
    width: 90px;
    height: auto;
    background-color: var(--card-icon-bg);
    padding-right: 2rem;
    margin-bottom: 1rem;
    /* box-shadow: 0 7px 25px #b6eaff69; */
  }

  @media screen and (max-width: 767px) {
    .about-card {
      margin-bottom: 1rem;
    }
  }
`

export default AboutUs
