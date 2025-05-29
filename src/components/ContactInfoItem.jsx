import React from "react";
import { motion } from "framer-motion";

const ContactInfoItem = ({ icon, title, value, link }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start space-x-4"
    >
      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <a
          href={link}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {value}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactInfoItem;