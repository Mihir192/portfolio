# Tech Professional Portfolio - HTML/CSS/JS Version

A modern, fully responsive portfolio website built with pure HTML, CSS, and JavaScript. Features a futuristic design with dark/light mode toggle, smooth animations, and interactive components.

## Features

- 🎨 **Modern Design**: Minimal, futuristic, and professional design with glassmorphism effects
- 🌓 **Dark/Light Mode**: Smooth theme transition with persistent preference
- ✨ **Animations**: CSS animations and JavaScript for scroll reveals, hover effects, and transitions
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- ⚡ **Performance**: Lightweight with no framework dependencies
- 🎭 **Interactive Components**: 
  - Typewriter effect for roles
  - Animated gradient backgrounds
  - 3D tilt/parallax effects on project cards
  - Modal popups for project details
  - Animated tech stack grid

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, animations, and glassmorphism
- **Vanilla JavaScript**: No framework dependencies
- **Font Awesome**: Icon library
- **Google Fonts**: Space Grotesk and Inter fonts

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README-HTML.md      # This file
```

## Getting Started

### Installation

1. Clone or download the project files
2. Open `index.html` in a web browser
3. That's it! No build process or dependencies required.

### Local Development Server (Optional)

For the best experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Customization

### Updating Personal Information

1. **Hero Section**: Edit the `<section class="hero">` in `index.html`
   - Update name, tagline, and social links
   
2. **About Section**: Modify `.about-content` in `index.html`
   - Update bio text
   - Modify skills in `script.js` (skills array)

3. **Projects**: Update the `projects` array in `script.js`

4. **Contact**: Change email and social links in `index.html`

5. **Tech Stack**: Modify the `techStack` array in `script.js`

### Theming

Colors and theme settings can be customized in `styles.css`:

- CSS variables in `:root` and `[data-theme="dark"]` selectors
- Update gradient colors, accent colors, and background colors

### Adding Projects

Edit the `projects` array in `script.js`:

```javascript
const projects = [
    {
        id: 1,
        title: 'Your Project',
        description: 'Short description',
        longDescription: 'Detailed description for modal',
        tags: ['Tag1', 'Tag2'],
        technologies: ['Tech1', 'Tech2'],
        githubUrl: 'https://github.com/your-repo',
        liveUrl: 'https://your-site.com',
    },
    // Add more projects...
];
```

### Adding Skills

Edit the `skills` array in `script.js`:

```javascript
const skills = [
    { 
        name: 'Skill Name', 
        icon: 'fab fa-icon-class',  // Font Awesome icon class
        level: 90,                   // Percentage (0-100)
        color: '#3b82f6'             // Icon color
    },
    // Add more skills...
];
```

### Adding Tech Stack Items

Edit the `techStack` array in `script.js`:

```javascript
const techStack = [
    { 
        name: 'Technology', 
        icon: 'fab fa-icon-class',  // Font Awesome icon class
        color: '#3b82f6'             // Icon color
    },
    // Add more technologies...
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Breakdown

### Hero Section
- Animated gradient background that follows mouse movement
- Particle effects
- Typewriter effect for rotating roles
- Smooth scroll CTAs
- Social media links

### About Section
- Bio with glassmorphism card
- Animated skills grid with progress bars
- Scroll-triggered animations

### Projects Section
- Interactive project cards with hover effects
- Modal popups with detailed project information
- GitHub and live demo links
- Technology tags

### Tech Stack Section
- Animated grid of tech icons
- Spring animations on scroll
- Hover effects with rotation

### Contact Section
- Contact form with validation
- Social media links
- Responsive layout

### Footer
- Theme toggle
- Social links
- Copyright information

## Performance Tips

1. **Optimize Images**: If you add project images, optimize them before use
2. **Lazy Loading**: Images are lazy-loaded by default in modern browsers
3. **Minify**: For production, minify CSS and JS files
4. **CDN**: Consider using CDN for Font Awesome and Google Fonts (already included)

## Differences from React Version

This HTML/CSS/JS version:
- ✅ No build process required
- ✅ Works directly in browser
- ✅ Smaller file size
- ✅ Faster initial load
- ✅ No dependencies
- ⚠️ Less component reusability
- ⚠️ More manual DOM manipulation

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspiration from brittanychiang.com and rauno.me
- Icons from Font Awesome
- Fonts from Google Fonts
