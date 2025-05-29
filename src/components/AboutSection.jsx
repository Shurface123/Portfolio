
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img  alt="Lovelace John Kwaku Baidoo working on a laptop in a creative workspace with design elements and code visible on screen" className="w-full h-auto" src="https://images.unsplash.com/photo-1507146815454-9faa99d579aa" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm Lovelace John Kwaku Baidoo, a Creative Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over 3 years of experience in web development, I specialize in creating beautiful, functional, and user-friendly websites and applications. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in the tech industry started with a simple curiosity about how things work, and it has since evolved into a career dedicated to crafting digital experiences that are both functional and visually stunning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I believe in the power of clean code and thoughtful design to solve real-world problems. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-6">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Greater Accra, Ghana</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">lovelacejohnkwakubaidoo@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6">Freelance</h4>
                <p className="text-gray-600 dark:text-gray-300">Available</p>
              </div>
            </div>

            {/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
