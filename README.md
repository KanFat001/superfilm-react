# Portfolio Homepage - React Project

This is a React application that recreates a cinematic portfolio homepage for Superlove Film Photography business.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Create a new directory for your project:
   \`\`\`bash
   mkdir portfolio-homepage
   cd portfolio-homepage
   \`\`\`

2. Copy all the files from this project into your directory

3. Install the dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

\`\`\`
src/
  ├── components/
  │   ├── PortfolioHomepage.js
  │   └── PortfolioHomepage.css
  ├── App.js
  ├── App.css
  ├── index.js
  └── index.css
public/
  └── index.html
package.json
tailwind.config.js
postcss.config.js
README.md
\`\`\`

## Features

- **Modern Navigation**: Fixed header with mobile hamburger menu
- **Split Video Hero**: Cinematic hero section with dual video backgrounds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Tailwind CSS**: Modern utility-first CSS framework
- **Interactive Gallery**: Hover effects and responsive image grid
- **Mobile Menu**: Full-screen mobile navigation overlay
- **Social Integration**: Instagram, Vimeo, and TikTok links
- **Smooth Animations**: Transitions and hover effects throughout

## Key Sections

1. **Navigation Bar**: Fixed header with logo, navigation links, and social icons
2. **Hero Section**: Full-screen video background with centered title
3. **Recent Work Gallery**: Responsive grid showcasing photography work
4. **Philosophy Section**: Text-focused section about film photography
5. **Footer**: Contact information and additional navigation

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixing

## Customization

To customize the portfolio:

1. **Replace Videos**: Update video sources in the hero section
2. **Change Images**: Update image URLs in the gallery sections
3. **Update Text**: Modify content throughout the JSX
4. **Styling**: Edit Tailwind classes or add custom CSS
5. **Social Links**: Update social media URLs in navigation

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

To deploy this project:

1. Run `npm run build` to create a production build
2. Deploy the `build` folder to your hosting service
3. Popular options include Netlify, Vercel, or GitHub Pages

## Browser Support

This project works in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes

- Videos are set to autoplay, muted, and loop for optimal user experience
- Images use responsive loading and hover effects
- Mobile menu uses smooth transitions
- All animations are hardware-accelerated for smooth performance
