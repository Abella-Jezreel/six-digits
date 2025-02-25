import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";

const Resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Bachelor of Science in Electrical Engineering
            </h5>
            <p className="font-semibold">
              Southern Luzon State University (2017)
            </p>
            <p className="my-3">
              I graduated in 2017 with a Bachelor of Science in Electrical
              Engineering from Southern Luzon State University in the
              Philippines. While my academic background is in engineering, I
              also studied Front-End Development Techdegree from Team Treehouse
              and completed a MERN Stack Development certification on Udemy.
              These programs equipped me with expertise in modern web
              technologies, including React, Node.js, Express, and full-stack
              development, enabling me to build responsive and scalable
              applications.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Recent Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Full Stack Developer – Accenture (Remote){" "}
            </h5>
            <p className="font-semibold">(July 2022 – February 2025)</p>
            <p className="my-3">
              {" "}
              I developed an online shop for gaming gadgets, enhancing the user
              experience for specialized equipment purchases using React.js,
              TypeScript, Redux, GraphQL, and Tailwind CSS. To foster community
              engagement, I created a tournament section that allows users to
              create, join, and compete in various games. Additionally, I
              implemented live streaming and chat features, enabling real-time
              interaction among gamers and strengthening community involvement
              within the platform. On the back end, I built a server using
              Node.js with Express.js, Apollo GraphQL, and MongoDB, ensuring a
              seamless and scalable application architecture.
            </p>
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
