import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Award, Users, Briefcase } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Award className="h-8 w-8 text-blue-600" />, value: "3+", label: "Years Experience" },
    { icon: <Briefcase className="h-8 w-8 text-purple-600" />, value: "10+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8 text-green-600" />, value: "10+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate and results-driven Creative Developer with a knack for crafting seamless and engaging digital experiences.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img  alt="Lovelace John Baidoo working on a modern computer setup with multiple monitors displaying code and design tools, in a bright, well-lit office environment" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-400/30 dark:bg-blue-600/30 rounded-full filter blur-2xl opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-purple-400/30 dark:bg-purple-600/30 rounded-full filter blur-2xl opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 animation-delay-2000"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              A Developer Focused on Impact and Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              With over 3 years in the dynamic field of web development, I've honed my skills in creating high-impact websites and applications. My expertise lies in translating complex requirements into intuitive, user-friendly solutions that drive business growth and enhance user engagement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I thrive on challenges and am constantly exploring new technologies to stay at the forefront of innovation. My philosophy is to build not just functional, but also beautiful and performant digital products that leave a lasting impression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="font-semibold text-xl mb-1 text-gray-800 dark:text-white">Full Name:</h4>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Lovelace John Baidoo</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1 text-gray-800 dark:text-white">Primary Role:</h4>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Full Stack Developer</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1 text-gray-800 dark:text-white">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Accra, Ghana (Remote-friendly)</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1 text-gray-800 dark:text-white">Availability:</h4>
                <p className="text-green-600 dark:text-green-400 font-semibold text-lg">Open to Projects</p>
              </div>
            </div>
            
            <motion.a
                href="/resume.pdf"
                download="LovelaceJohnBaidoo-Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3 shadow-md hover:shadow-lg transform transition-all duration-300"
                
              >
                <Download className="mr-2 h-5 w-5" /> Download My Resume
              </Button>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;