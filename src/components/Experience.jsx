import React from "react";
import {
  VerticalTimeline,
  VerticalTimeLine,
  VerticalTimeLineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../contants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimeLineElement
      contentStyle={{ background: "#1d183", color: "#fff" }}
      contentArrowStyle={{ broderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="text-white text-[24px] font-bold">
        <h3>{experience.title}</h3>
      </div>
    </VerticalTimeLineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience . </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <verticalTimeLine>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </verticalTimeLine>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
