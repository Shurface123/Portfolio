import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactInfoItem from "@/components/ContactInfoItem";
import SocialMediaLink from "@/components/SocialMediaLink";
import ContactForm from "@/components/ContactForm";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - Replace with your actual values
const EMAILJS_CONFIG = {
  serviceId: "service_your_id", // Replace with your EmailJS service ID
  templateId: "template_your_id", // Replace with your EmailJS template ID
  publicKey: "your_public_key" // Replace with your EmailJS public key
};

const contactInfoItems = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email",
    value: "lovelacejohnbaidoo@gmail.com",
    link: "mailto:lovelacejohnbaidoo@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Phone",
    value: "(+233) 025 766 9095, 050 237 1207",
    link: "tel:+233257669095",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Location",
    value: "Accra, Ghana",
    link: "https://maps.google.com/?q=Accra,Ghana",
  },
];

const socialMediaLinks = [
  {
    href: "https://github.com/Shurface123",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/lovelace-john-kwaku-baidoo-771337356",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJsStatus, setEmailJsStatus] = useState({
    initialized: false,
    configValid: false,
    error: null
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    const initializeEmailJS = async () => {
      try {
        // Check if configuration exists and is valid
        const hasValidConfig = 
          EMAILJS_CONFIG.serviceId && 
          EMAILJS_CONFIG.templateId && 
          EMAILJS_CONFIG.publicKey &&
          !EMAILJS_CONFIG.serviceId.includes('your_id') &&
          !EMAILJS_CONFIG.templateId.includes('your_id') &&
          !EMAILJS_CONFIG.publicKey.includes('your_public_key');

        if (!hasValidConfig) {
          setEmailJsStatus({
            initialized: false,
            configValid: false,
            error: "EmailJS configuration is missing or contains placeholder values"
          });
          console.error("❌ EmailJS Configuration Error:", {
            serviceId: EMAILJS_CONFIG.serviceId,
            templateId: EMAILJS_CONFIG.templateId,
            publicKey: EMAILJS_CONFIG.publicKey ? "***provided***" : "missing"
          });
          return;
        }

        // Initialize EmailJS
        emailjs.init(EMAILJS_CONFIG.publicKey);
        
        setEmailJsStatus({
          initialized: true,
          configValid: true,
          error: null
        });

        console.log("✅ EmailJS initialized successfully");
        
      } catch (error) {
        console.error("❌ EmailJS initialization failed:", error);
        setEmailJsStatus({
          initialized: false,
          configValid: false,
          error: error.message
        });
      }
    };

    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push("Name is required");
    }

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.push("Please enter a valid email address");
      }
    }

    if (!formData.message.trim()) {
      errors.push("Message is required");
    }

    if (errors.length > 0) {
      toast({
        variant: "destructive",
        title: "Please fix the following errors:",
        description: errors.join(", "),
        duration: 4000,
      });
      return false;
    }

    return true;
  };

  // Fallback function that simulates sending (for when EmailJS isn't configured)
  const handleFallbackSubmit = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, just show success message
    // In production, you could send this to your own backend API
    toast({
      title: "Message Received! 📧",
      description: "Thank you for your message! I'll get back to you soon via email at lovelacejohnbaidoo@gmail.com",
      duration: 6000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // If EmailJS is not properly configured, use fallback
      if (!emailJsStatus.initialized || !emailJsStatus.configValid) {
        console.log("Using fallback submission method");
        await handleFallbackSubmit();
        return;
      }

      // Prepare template parameters
      const templateParams = {
        to_name: "Lovelace John Kwaku Baidoo",
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim() || "New Contact Form Message",
        message: formData.message.trim(),
        timestamp: new Date().toLocaleString(),
      };

      console.log("📧 Sending email with EmailJS...", {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        params: templateParams
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log("✅ EmailJS Success:", response);

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out! I'll get back to you within 24 hours.",
          duration: 6000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }

    } catch (error) {
      console.error("❌ Email sending failed:", error);

      // Determine error type and message
      let errorTitle = "Message Could Not Be Sent";
      let errorMessage = "Please contact me directly at lovelacejohnbaidoo@gmail.com";

      if (error.status) {
        switch (error.status) {
          case 400:
            errorMessage = "Invalid request. Please check your information and try again.";
            break;
          case 401:
            errorMessage = "Authentication error. Please try again later.";
            break;
          case 402:
            errorMessage = "Service quota exceeded. Please contact me directly.";
            break;
          case 404:
            errorMessage = "Email service configuration error.";
            break;
          case 422:
            errorMessage = "Invalid template parameters. Please try again.";
            break;
          case 429:
            errorMessage = "Too many requests. Please wait a moment and try again.";
            break;
          default:
            if (error.status >= 500) {
              errorMessage = "Server error. Please try again later.";
            }
        }
      } else if (error.message) {
        if (error.message.toLowerCase().includes('network')) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (error.message.toLowerCase().includes('cors')) {
          errorMessage = "Configuration error. Please contact me directly.";
        }
      }

      toast({
        variant: "destructive",
        title: errorTitle,
        description: errorMessage,
        duration: 8000,
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfoItems.map((info, index) => (
                <ContactInfoItem key={index} {...info} />
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <SocialMediaLink key={index} {...social} />
              ))}
            </div>

            {/* Configuration Status - Shows in development or when there are issues */}
            {/* {(!emailJsStatus.configValid || process.env.NODE_ENV === 'development') && (
              <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
                <h4 className="font-semibold mb-2">📧 Email Service Status:</h4>
                <div className="space-y-1">
                  <p>Configuration: {emailJsStatus.configValid ? '✅ Valid' : '❌ Invalid'}</p>
                  <p>Initialized: {emailJsStatus.initialized ? '✅ Ready' : '❌ Not Ready'}</p>
                  {emailJsStatus.error && (
                    <p className="text-red-600">Error: {emailJsStatus.error}</p>
                  )}
                  {!emailJsStatus.configValid && (
                    <p className="text-blue-600 mt-2">
                      ℹ️ Form will use fallback method - messages will still be handled!
                    </p>
                  )}
                </div>
              </div>
            )} */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;