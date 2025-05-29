import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Initialize EmailJS (optional - can be done in main app file)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Main function to send email
export const sendEmail = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Please fill in all required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Prepare email parameters
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Message',
      message: formData.message,
      to_name: 'Lovelace John Kwaku Baidoo', // Replace with your name
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      emailParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', result);
    return { 
      success: true, 
      data: result,
      message: 'Message sent successfully!'
    };

  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send message. Please try again.',
      message: error.message || 'Something went wrong. Please try again.'
    };
  }
};

// Function to send auto-reply email (optional)
export const sendAutoReply = async (userEmail, userName) => {
  try {
    const autoReplyParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Lovelace John Kwaku Baidoo', // Replace with your name
      message: 'Thank you for contacting me! I have received your message and will get back to you within 24 hours.',
    };

    // You'll need a separate template for auto-replies
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      'template_pl4akzl', // Create this template in EmailJS
      autoReplyParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return { success: false, error: error.message };
  }
};

// Utility function to check EmailJS configuration
export const validateEmailJSConfig = () => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
  
  if (!serviceId || serviceId === 'service_bhcb8xr') {
    console.warn('EmailJS Service ID not configured');
    return false;
  }
  
  if (!templateId || templateId === 'template_pl4akzl') {
    console.warn('EmailJS Template ID not configured');
    return false;
  }
  
  if (!publicKey || publicKey === 'KqH-0i9j1T1oN-r_E') {
    console.warn('EmailJS Public Key not configured');
    return false;
  }
  
  return true;
};