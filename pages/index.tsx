import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

import { motion } from 'framer-motion'
import { fadeInUp, stagger, routeAnimation } from "../animation";

const About: NextPage = () => {
  // console.log(services);

  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
      I graduated from Team Treehouse with a Front-End Development Tech degree and I have strong knowledge of React JS, Typescript, JavaScript, Tailwind, Next JS, CSS3, SASS, Bootstrap, and HTML5. I am an energetic problem solver, and I also have a Bachelor degree in Electrical Engineering with years of experience in Construction of high rise Buildings and Building Maintenance.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} animate="animate" initial="initial">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp} 
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

//!called every time  the page refreshed
export const getServerSideProps: GetServerSideProps = async (
   context: GetServerSidePropsContext
) => {
   const res = await fetch('${process.env.VERCEL_URL}/api/services')
   const data = await res.json()
   console.log(data)
   return { props: { services: data.services } }
}

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
