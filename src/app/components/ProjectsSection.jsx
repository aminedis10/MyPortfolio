"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Home Rentals Application",
    description:
      "Full Stack Home Rentals application featuring user authentication, property listing creation, dynamic photo management, booking system, category-based property feed, keyword search, wishlist functionality, MongoDB photo storage, Redux state management",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MERN E-Commerce Store",
    description:
      "Built a fully functional e-commerce store using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a seamless shopping experience,Features: User Authentication & Authorization, Product Management, Shopping Cart, Order Processing, User Profiles, Admin Dashboard, Search & Filtering, Responsive Design, Notifications.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Social Media Platform",
    description:
      "Developed a social media application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated real-time Chat with Socket.io, Features: authentication & authorization with JWT, post creation and deletion, like/unlike posts, commenting, follow/unfollow users,dark/light mode, full responsiveness, chat with image support, seen/unseen message status, notification sounds,",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Built a weather application using React Native, providing users with real-time weather updates and forecasts. This project encompasses a comprehensive set of functionalities, allowing users to access weather information for various locations and view detailed forecasts",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Food Delivery App",
    description:
      "Built a food delivery application using React Native and sanity.io. Leveraging the power of React Native Expo, sanity.io, TailwindCss, React Navigation, and various other features",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AI VOICE ASSISTANT",
    description:
      "Developed an advanced AI Voice Assistant using React Native, integrated with ChatGPT for natural language understanding and DALL-E for image generation. This fully functional assistant can convert voice to text and text to speech",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
