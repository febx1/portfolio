import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Nous Infosystems, Bangalore",
    period: "2020 - Present",
    designation: "Software Engineer",
    description:
      "Software Engineer for the product project Medinous. Product used by top Hospitals,Medical Centers",
  },
  {
    company: "If Else Cloud, Aukland, NZ",
    period: "2020 - Present",
    designation: "Senior Web Application Engineer",
    description:
      "Senior Frontend Engineer for ERP + MRP + MES solutution software. Resource Planning, SKU/BoM Management, WorkOrder Scheduling, OEE, Shopfloor and Workforce, Maintenance and QA, Manufacturing Projects, Automated Reports, and more.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-100 mt-2">{experience.designation}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
