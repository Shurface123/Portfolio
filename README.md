
# Modern Portfolio Website

Welcome to the Modern Portfolio Website! This project is a sleek, responsive, and animated single-page portfolio built with React, Vite, TailwindCSS, Framer Motion, and shadcn/ui components. It's designed to showcase your skills, projects, and experience in a visually appealing way.

## ✨ Features

*   **Modern & Clean Design:** Aesthetically pleasing UI with a focus on readability and user experience.
*   **Responsive Layout:** Looks great on all devices, from desktops to mobile phones.
*   **Smooth Animations & Transitions:** Powered by Framer Motion for engaging micro-interactions.
*   **Project Showcase:** Detailed project cards with modal views for more information.
*   **Skills Section:** Clearly display your technical skills and proficiencies.
*   **Experience Timeline:** Showcase your professional journey in an organized manner.
*   **Contact Form with EmailJS:** Integrated contact form that sends messages directly to your email.
*   **Image Upload:** Personalize your hero section by uploading your own profile picture (stored in browser state).
*   **Dark Mode:** Switch between light and dark themes.
*   **Scroll-to-Top Button:** Easy navigation back to the top of the page.
*   **shadcn/ui Components:** Utilizes beautifully designed and accessible UI components.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React 18.2.0
    *   Vite (Build Tool & Dev Server)
    *   TailwindCSS 3.3.3 (Styling)
    *   Framer Motion 10.16.4 (Animations)
    *   shadcn/ui (UI Components built with Radix UI)
    *   Lucide React 0.285.0 (Icons)
    *   EmailJS Browser SDK (Contact Form)
*   **Language:** JavaScript (JSX)
*   **Package Manager:** npm

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── .htaccess         # Example, for potential future Apache config
├── src/
│   ├── assets/           # Static assets like logos (if any, mostly Unsplash)
│   ├── components/
│   │   ├── ui/           # shadcn/ui components (Button, Dialog, Avatar etc.)
│   │   ├── AboutSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfoItem.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SkillsSection.jsx
│   │   └── SocialMediaLink.jsx
│   ├── config/
│   │   └── emailjs-config.js # EmailJS API keys and IDs
│   ├── lib/
│   │   └── utils.js      # Utility functions (e.g., cn for Tailwind classes)
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global styles and Tailwind directives
│   └── main.jsx          # Entry point of the React application
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Specifies intentionally untracked files
├── index.html            # Main HTML file for Vite
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration (for Tailwind)
├── README.md             # This file
└── tailwind.config.js    # TailwindCSS configuration
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v20 or later recommended - check `.nvmrc` if present)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository (or export from Hostinger Horizons):**
    If you have access to the Git repository:
    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```
    If you exported the project as a ZIP file, unzip it and navigate into the project directory.

2.  **Install dependencies:**
    Open your terminal in the project's root directory and run:
    ```bash
    npm install
    ```
    This command will download and install all the necessary packages defined in `package.json`.

3.  **Configure EmailJS (Optional but Recommended for Contact Form):**
    For the contact form to send emails, you need to set up EmailJS:
    *   Go to [EmailJS](https://www.emailjs.com/) and create an account (or log in).
    *   Add a new email service (e.g., Gmail).
    *   Create a new email template. Note down its **Template ID**.
    *   Find your **Service ID** and **Public Key** in your EmailJS account settings.
    *   Update the `src/config/emailjs-config.js` file with your actual `serviceId`, `templateId`, and `publicKey`:
        ```javascript
        // src/config/emailjs-config.js
        export const EMAILJS_CONFIG = {
          serviceId: 'YOUR_SERVICE_ID',
          templateId: 'YOUR_TEMPLATE_ID',
          publicKey: 'YOUR_PUBLIC_KEY',
        };
        ```
        The project includes placeholder values. For the contact form to work, you **must** replace these with your own EmailJS credentials.

### Running the Development Server

Once the installation is complete, you can start the development server:

```bash
npm run dev
```

This will start the Vite development server, usually on `http://localhost:5173` (the port might vary). Open this URL in your web browser to see the application. The server will automatically reload the page when you make changes to the code.

### Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This command will generate a `dist` folder in the project's root directory. This folder contains all the static assets (HTML, CSS, JavaScript) that can be deployed to a web server or hosting platform.

### Previewing the Production Build

After building the project, you can preview the production build locally:

```bash
npm run preview
```

This will serve the contents of the `dist` folder, allowing you to test the production version before deployment.

## 🎨 Customization

*   **Content:** Most of the textual content (names, descriptions, project details, experiences) is hardcoded within the respective JSX components (e.g., `HeroSection.jsx`, `AboutSection.jsx`, `ProjectsSection.jsx`, `ExperienceSection.jsx`). Edit these files directly to personalize the portfolio.
*   **Images:**
    *   The hero section profile picture can be uploaded via the UI. This image is stored in the browser's state and will persist for that session.
    *   Project images and other illustrative images are currently sourced from Unsplash (placeholder images). You can replace the URLs in the `ProjectsSection.jsx` (for project images) and `AboutSection.jsx` (for the about image) with your own image URLs.
*   **Styling:**
    *   TailwindCSS utility classes are used extensively. You can modify styles directly in the JSX components.
    *   Global styles and custom Tailwind configurations can be found in `src/index.css` and `tailwind.config.js` respectively.
    *   Colors and theme variables (for light/dark mode) are defined in `src/index.css` within the `:root` and `.dark` selectors.
*   **Contact Information:** Update email, phone, and social media links in `src/components/ContactSection.jsx`.

## 🤝 Contributing

Currently, this project is set up as a personal portfolio template. If you'd like to contribute to its development as a template, feel free to fork the repository and submit pull requests. For personal use, direct modifications are encouraged.

## 📜 License

This project is typically for personal use. If distributed as a template, consider adding an MIT License or similar.

---

Happy Coding! ✨ We hope this portfolio template helps you create an amazing showcase of your work!
