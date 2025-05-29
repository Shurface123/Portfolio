import React from "react";
import { motion } from "framer-motion";

const SocialMediaLink = ({ href, label, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
    >
      {icon}
    </motion.a>
  );
};

export default SocialMediaLink;