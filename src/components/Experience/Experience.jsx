import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skills = [
    {
      title: "Java",
      imageUrl: getImageUrl("skills/java.png"),
      color: "#f89820" // Original Java color
    },
    {
      title: "C++",
      imageUrl: getImageUrl("skills/cplus2.png"), 
      color: "#044F88" // C++ blue color
    },
    {
      title: "Python",
      imageUrl: getImageUrl("skills/cplus.png"),
      color: "#4584b6" // Python blue color
    },
    {
      title: "HTML",
      imageUrl: getImageUrl("skills/html.png"),
      color: "#e34c26" // HTML orange color
    },
    {
      title: "CSS",
      imageUrl: getImageUrl("skills/css.png"),
      color: "#264de4" // CSS blue color
    },
    {
      title: "React",
      imageUrl: getImageUrl("skills/react.png"),
      color: "#61dafb" // React blue color
    },
    {
      title: "Node",
      imageUrl: getImageUrl("skills/node.png"),
      color: "#3c873a" // Node green color
    },
    {
      title: "Spring Boot",
      imageUrl: getImageUrl("skills/SpringBoot.png"),
      color: "#6db33f" // Spring green color
    },
    {
      title: "Angular",
      imageUrl: getImageUrl("skills/angular.png"),
      color: "#dd0031" // Angular red color
    }
  ];

  // URLs for direct skill images if needed
  const directImageUrls = {
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  };

  const getSkillIcon = (skill) => {
    try {
      return skill.imageUrl;
    } catch (error) {
      const key = skill.title.toLowerCase().replace(/\s+/g, '');
      const directKey = key === 'springboot' ? 'spring' : key;
      
      return directImageUrls[directKey] || skill.imageUrl;
    }
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img 
                  src={getSkillIcon(skill)}
                  alt={skill.title}
                  loading="eager"
                  onError={(e) => {
                    console.log(`Failed to load ${skill.title} icon, trying fallback`);
                    const key = skill.title.toLowerCase().replace(/\s+/g, '');
                    const directKey = key === 'springboot' ? 'spring' : key;
                    e.target.src = directImageUrls[directKey];
                  }}
                  className={styles.originalColorIcon} 
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              {historyItem.imageSrc && (
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  loading="eager"
                  onError={(e) => {
                    console.log(`Failed to load history icon: ${historyItem.imageSrc}`);
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};