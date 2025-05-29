# Modern Portfolio Website

A sleek, responsive portfolio website built with React, Vite, and Tailwind CSS. This project showcases your professional work, skills, and contact information in a modern, interactive interface.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **Interactive Elements**: Smooth animations and transitions with Framer Motion
- **Dark/Light Mode**: Toggle between color schemes
- **Project Showcase**: Display your work with images and descriptions
- **Contact Form**: Easy way for visitors to get in touch
- **Accessible**: Built with accessibility in mind using Radix UI primitives
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide Icons
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser**
   The application should automatically open in your default browser at `http://localhost:5173`.

## 🏗️ Project Structure

```
portfolio/
├── public/               # Static files (images, fonts, etc.)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── AboutSection.jsx       # About me section
│   │   ├── ContactForm.jsx        # Contact form component
│   │   ├── ContactInfoItem.jsx    # Individual contact info items
│   │   ├── ContactSection.jsx     # Contact section container
│   │   ├── Footer.jsx             # Footer component
│   │   ├── HeroSection.jsx        # Hero/landing section
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── ProjectsSection.jsx    # Projects showcase
│   │   ├── ScrollToTop.jsx        # Scroll to top button
│   │   ├── SkillsSection.jsx      # Skills and technologies
│   │   ├── SocialMediaLink.jsx    # Social media links
│   │   └── ui/                    # Reusable UI components
│   │       ├── avatar.jsx         # Avatar component
│   │       ├── button.jsx         # Custom button component
│   │       ├── tabs.jsx           # Tabbed interface
│   │       ├── toast.jsx          # Toast notifications
│   │       ├── toaster.jsx        # Toast container
│   │       └── use-toast.js       # Toast hook
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── App.jsx                    # Main App component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite configuration
```

## 🛠️ Available Scripts

In the project directory, you can run:

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally

## 🎨 Customization

1. **Update Content**:
   - Modify the content in the respective component files
   - Update profile information in the `AboutSection` and `HeroSection` components
   - Add/remove projects in the `ProjectsSection` component
   - Update skills in the `SkillsSection` component

2. **Styling**:
   - Customize colors, fonts, and spacing in `tailwind.config.js`
   - Add custom animations in `index.css`
   - Modify the theme in the Tailwind configuration

3. **Images & Assets**:
   - Replace placeholder images in the `public` directory
   - Update the favicon in `index.html`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📬 Contact

For any questions or feedback, please open an issue on the repository.

```
portfolio/
├── public/           # Static files
├── src/
│   ├── components/   # Reusable React components
│   ├── lib/          # Utility functions and configurations
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles
│   └── main.jsx      # Application entry point
├── .gitignore
├── index.html         # Main HTML template
├── package.json       # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🎨 Customization

### Updating Your Information
1. Navigate to the `src/components` directory
2. Update the relevant components with your personal information:
   - `AboutSection.jsx` - Your bio and skills
   - `ProjectSection.jsx` - Your project showcase
   - `ContactSection.jsx` - Your contact information

### Changing Colors and Styling
1. Open `tailwind.config.js` to modify the color scheme and theme
2. Custom styles can be added to `src/index.css`

## 📦 Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `dist` directory that you can deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 🌐 Deploying to the Web

### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository
2. Sign up at [Vercel](https://vercel.com/)
3. Click "New Project" and import your repository
4. Configure the build settings (Vite will be auto-detected)
5. Click "Deploy"

### Option 2: GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install --save gh-pages
   ```
2. Update your `package.json` with the homepage URL and deploy scripts
3. Run:
   ```bash
   npm run deploy
   ```

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons for React

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
