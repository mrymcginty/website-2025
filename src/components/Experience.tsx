import { motion } from "motion/react";
import { ExperiencePanel, Chip } from "./";

const Experience = () => {
  return (
    <section className="py-6">
      <motion.div>
        <h2 className="section-header">💼 Experience</h2>
        <ExperiencePanel
          company="MessageGears"
          icon="📤"
          position="Software Engineer"
          date="January 2023 - Present"
        >
          <>
            <ul className="custom-list custom-list--checkbox">
              <li>
                Role change due to an acquisition of Swrve by MessageGears.
              </li>
              <li>
                Primarily working on maintaining and adding new features to the
                Swrve platform, whilst also working on adding features to the
                MessageGears product.
              </li>
              <li>
                Experience working on two different codebases and
                build/deployment pipelines in tandem with a global team of
                developers.
              </li>
              <li>
                Experience in Angular, JSP and Cypress Testing in addition to
                existing React/GraphQL/Ruby stack
              </li>
            </ul>
            <div className="skills">
              <Chip skill="angular" />
              <Chip skill="cypress" />
              <Chip skill="react" />
              <Chip skill="react-testing-library" />
              <Chip skill="jest" />
              <Chip skill="redux" />
              <Chip skill="javascript" />
              <Chip skill="graphql" />
              <Chip skill="apollo client" />
              <Chip skill="tailwind" />
              <Chip skill="figma" />
              <Chip skill="ruby" />
              <Chip skill="rspec" />
              <Chip skill="jenkins" />
              <Chip skill="ci/cd" />
              <Chip skill="agile (jira)" />
              <Chip skill="storybook" />
              <Chip skill="npm" />
              <Chip skill="webpack" />
              <Chip skill="git" />
              <Chip skill="bitbucket" />
            </div>
          </>
        </ExperiencePanel>

        <ExperiencePanel
          company="Swrve"
          icon="🦜"
          position="Software Engineer"
          date="August 2021 - January 2023"
        >
          <>
            <ul className="custom-list custom-list--checkbox">
              <li>
                Reponsible for building new features to expand the customer
                engagement product. Primarily working on interfaces where
                customers could build out rich interactive in-app message
                campaigns and push campaigns accross multiple devices and
                platforms.
              </li>
              <li>
                Delivering and structuring code in a way that is understandable,
                readable, maintainable, and well tested.
              </li>
              <li>
                Experience in taking a feature from intial spec, scoping and
                ticketing in an Agile workflow, right through to testing and
                deployment to production.
              </li>
              <li>
                Contributing and maintaining the product UI component library
                (Storybook)
              </li>
              <li>
                Working primarily in React, with experience in backend (GraphQL,
                ApolloClient,Ruby), CI/CD deployment process via Jenkins, MySQL,
                Git, Docker. Testing via Jest and React Testing library, with
                E2E tests in Ruby (Rspec).
              </li>
            </ul>
            <div className="skills ">
              <Chip skill="react" />
              <Chip skill="react-testing-library" />
              <Chip skill="jest" />
              <Chip skill="redux" />
              <Chip skill="javascript" />
              <Chip skill="graphql" />
              <Chip skill="apollo client" />
              <Chip skill="tailwind" />
              <Chip skill="figma" />
              <Chip skill="ruby" />
              <Chip skill="rspec" />
              <Chip skill="jenkins" />
              <Chip skill="ci/cd" />
              <Chip skill="agile (jira)" />
              <Chip skill="storybook" />
              <Chip skill="npm" />
              <Chip skill="webpack" />
              <Chip skill="git" />
            </div>
          </>
        </ExperiencePanel>

        <ExperiencePanel
          company="Friday"
          icon="📅"
          position="UI/UX Developer, Senior Digital Designer"
          date="Apr 2014 - August 2021"
        >
          <>
            <ul className="custom-list custom-list--checkbox">
              <li>
                Building fully functioning responsive websites, full stack.
              </li>
              <li>
                Maintaining and contributing to company wide dev stack and
                boilerplate systems, ensuring consistent working practices
                across projects and developers.
              </li>
              <li>
                Experience working with APIs and optimising for speed and search
              </li>
              <li>Strong focus on optimising UX design principles</li>
              <li>
                Managing my own client base and taking smaller agency projects
                from initial discussions through to completion. (Scoping,
                quoting, managing timelines, managing scope creep, invoicing).
              </li>
            </ul>
            <div className="skills">
              <Chip skill="html" />
              <Chip skill="css" />
              <Chip skill="sass" />
              <Chip skill="javascript" />
              <Chip skill="jQuery" />
              <Chip skill="php" />
              <Chip skill="wordpress custom theming" />
              <Chip skill="node.js" />
              <Chip skill="bitbucket" />
              <Chip skill="git" />
            </div>
          </>
        </ExperiencePanel>

        <ExperiencePanel
          company="Mad Dog Digital"
          icon="🐕"
          position="Web Developer, Digital Designer"
          date="May 2010 - Apr 2014"
        >
          <ul className="custom-list custom-list--checkbox">
            <li>
              Website design and development, primarily on the Wordpress
              Platform.
            </li>
            <li>
              Production of digital marketing assets for external agencies,
              (banner ads, facebook apps, video production, email shots etc.)
            </li>
          </ul>
        </ExperiencePanel>

        <ExperiencePanel
          company="Smudge Design"
          icon="🍊"
          position="Graphic & Web Designer"
          date="Nov 2006 - Nov 2009"
        >
          <ul className="custom-list custom-list--checkbox">
            <li>Designing and production for print and web.</li>
            <li>Design and Production of digital advertising assets.</li>
          </ul>
        </ExperiencePanel>
      </motion.div>
    </section>
  );
};

export default Experience;
