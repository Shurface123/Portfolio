// EmailJS configuration
export const EMAILJS_CONFIG = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_bhcb8xr',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_pl4akzl',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'KqH-0i9j1T1oN-r_E',
  };
  
  // Optional: Email template variables for reference
  export const EMAIL_TEMPLATE_VARS = {
    FROM_NAME: '{{from_name}}',
    FROM_EMAIL: '{{from_email}}',
    SUBJECT: '{{subject}}',
    MESSAGE: '{{message}}',
    TO_NAME: '{{to_name}}',
    REPLY_TO: '{{reply_to}}',
  };