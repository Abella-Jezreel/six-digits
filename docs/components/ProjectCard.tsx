import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p
        className="my-2 text-center cursor-pointer  scale-105"
        onClick={() => setShowDetail(true)}
      >
        {name}
      </p>

      {showDetail && (
        <motion.div
          variants={stagger}
          animate="animate"
          initial="initial"
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        >
          <motion.div variants={fadeInUp}>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <motion.div
              variants={fadeInUp}
              className=" flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 b-hover"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 b-hover"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} animate="animate" initial="initial">
            <motion.div variants={fadeInUp}>
              <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
              <h3 className="mb-3 font-medium">{description}</h3>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
