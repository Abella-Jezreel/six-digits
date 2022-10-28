import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";

const Resume = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
             Front-End Development Tech degree
            </h5>
            <p className="font-semibold">Team Treehouse (2021-2022)</p>
            <p className="my-3">
              I also have a Bachelors Degree in Electrical Engineering from Southern Luzon State University in the Philippines. I am continuously learning different computer languages and studying is part of my daily lifestyle.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front End Developer Engineer </h5>
            <p className="font-semibold">(July 2022 - Present)</p>
            <p className="my-3"> Innovations Group Company / (DSSE) at Pasay City Philippines. This company is building and maintaining Philippine Online Gaming Websites or POGO. I have 5+ years of experience in Engineering field and almost 3 years experience in Web Development</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
