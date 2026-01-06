import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, GitCommit as GitHub, Linkedin, Twitter, UploadCloud } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const [profileImage, setProfileImage] = useState("/images/Shurface.jpg");
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          variant: "destructive",
          title: "Image Too Large",
          description: "Please upload an image smaller than 2MB.",
        });
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        toast({
          variant: "destructive",
          title: "Invalid File Type",
          description: "Please upload a JPG, PNG, or WEBP image.",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        toast({
          title: "Image Updated!",
          description: "Your profile picture has been successfully updated.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient pt-24 pb-12 md:pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 shadow-lg"
            >
              🚀 Available for New Opportunities
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
            >
              Hi, I'm <span className="gradient-text">Lovelace John Baidoo</span>
              <br />
              <br />
              <span className="text-xl md:text-2xl lg:text-3xl block mt-2">Creative Developer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              I craft innovative and high-performance digital experiences that captivate users and drive results. Specializing in modern frontend technologies and user-centric design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Explore My Work
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-6 mt-12 justify-center lg:justify-start"
            >
              <motion.a href="https://github.com/Shurface123" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <GitHub size={28} />
              </motion.a>
              <motion.a href="https://linkedin.com/in/lovelace-john-kwaku-baidoo-771337356" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </motion.a>
              <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
            className="lg:col-span-2 relative flex flex-col items-center"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Avatar className="w-full h-full shadow-2xl border-4 border-white dark:border-gray-700">
                <AvatarImage src={profileImage} alt="Professional portrait of Lovelace John Baidoo, a creative developer" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
              />
              <motion.button
                onClick={triggerFileUpload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-blue-600 dark:text-blue-400 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
                title="Upload new picture"
              >
                <UploadCloud size={20} />
              </motion.button>
            </div>
             <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-56 md:h-56 bg-blue-300/50 dark:bg-blue-700/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 md:w-56 md:h-56 bg-purple-300/50 dark:bg-purple-700/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="scroll-indicator hidden md:flex">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Discover More</span>
        <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;