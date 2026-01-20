import emailjs from '@emailjs/browser';

/**
 * Centralized EmailJS config
 * Env-based = predictable production behavior
 */
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  autoReplyTemplateId: import.meta.env.VITE_EMAIL_AUTOREPLY_TEMPLATE_ID,
};

/**
 * Initialize EmailJS
 * Call once (e.g. in App.jsx)
 */
export const initEmailJS = () => {
  if (!EMAILJS_CONFIG.publicKey) {
    console.warn('[EmailJS] Public key missing');
    return;
  }
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

/**
 * Validate EmailJS configuration
 */
export const validateEmailJSConfig = () => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('[EmailJS] Configuration incomplete');
    return false;
  }
  return true;
};

/**
 * Send contact form email
 */
export const sendEmail = async (formData) => {
  try {
    if (!validateEmailJSConfig()) {
      throw new Error('Email service not configured');
    }

    if (!formData?.name || !formData?.email || !formData?.message) {
      throw new Error('Please fill in all required fields');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Message',
      message: formData.message,
      to_name: 'Lovelace John Kwaku Baidoo',
      reply_to: formData.email,
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      emailParams,
      EMAILJS_CONFIG.publicKey
    );

    return {
      success: true,
      data: result,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('[EmailJS] Send failed:', error);
    return {
      success: false,
      error: error.message || 'Failed to send message',
      message: error.message || 'Something went wrong. Please try again.',
    };
  }
};

/**
 * Optional auto-reply email
 */
export const sendAutoReply = async (userEmail, userName) => {
  try {
    if (!EMAILJS_CONFIG.autoReplyTemplateId) {
      throw new Error('Auto-reply template not configured');
    }

    const autoReplyParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Lovelace John Kwaku Baidoo',
      message:
        'Thank you for contacting me! I have received your message and will respond within 24 hours.',
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.autoReplyTemplateId,
      autoReplyParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('[EmailJS] Auto-reply failed:', error);
    return { success: false, error: error.message };
  }
};
