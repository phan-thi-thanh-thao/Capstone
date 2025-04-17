# Pinwheel - A Modern Web UI with Tailwind CSS and Interactive Components

Pinwheel is a responsive web application template that combines the utility-first approach of Tailwind CSS with interactive components like carousels, tabs, and filters. It provides a clean, customizable foundation for building modern web interfaces with smooth animations and transitions.

The project features a modular architecture that separates styling, interactivity, and structure. It leverages Tailwind CSS for rapid styling, Swiper.js for touch-enabled carousels, and custom JavaScript modules for features like sticky headers, accordions, and shuffled layouts. The template is designed with performance and accessibility in mind, incorporating best practices for responsive design and user interaction.

## Repository Structure
```
.
├── css/                      # CSS related files
│   ├── input.css            # Tailwind CSS imports and base styles
│   └── output.css           # Compiled and optimized CSS output
├── js/                      # JavaScript modules
│   ├── main.js             # Core functionality and component initialization
│   ├── shuffle.js          # Layout shuffling and filtering functionality
│   └── swiper-bundle.js    # Carousel/slider functionality
├── index.html              # Main entry point with layout structure
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration for CSS processing
└── tailwind.config.js      # Tailwind CSS customization settings
```

## Usage Instructions
### Prerequisites
- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser with JavaScript enabled

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd pinwheel
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

### Quick Start
1. Basic template usage:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./css/output.css">
</head>
<body>
    <!-- Your content here -->
    <script src="./js/main.js"></script>
</body>
</html>
```

2. Initialize interactive components:
```javascript
// Initialize a carousel
new Swiper(".reviews-carousel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".reviews-carousel-pagination",
        clickable: true
    }
});
```

### More Detailed Examples
1. Creating a tab system:
```html
<div data-tab-group="example">
    <div data-tab-nav>
        <button data-tab="tab1">Tab 1</button>
        <button data-tab="tab2">Tab 2</button>
    </div>
    <div data-tab-content>
        <div data-tab-panel="tab1">Content 1</div>
        <div data-tab-panel="tab2">Content 2</div>
    </div>
</div>
```

2. Implementing a shuffle grid:
```javascript
const Shuffle = window.Shuffle;
const element = document.querySelector('.shuffle-container');
const shuffleInstance = new Shuffle(element, {
    itemSelector: '.shuffle-item'
});
```

### Troubleshooting
1. CSS not updating
- Issue: Changes to Tailwind classes not reflecting
- Solution: Ensure PostCSS is watching for changes
```bash
npm run dev
```

2. JavaScript components not initializing
- Check browser console for errors
- Verify script loading order in HTML
- Ensure required DOM elements exist before initialization

3. Carousel issues
- Enable debug mode in Swiper initialization:
```javascript
new Swiper('.carousel', {
    debug: true,
    // other options
});
```

## Data Flow
The application follows a component-based architecture with event-driven interactions.

```ascii
[User Input] -> [Event Handlers] -> [State Updates] -> [DOM Updates]
     ^                                                      |
     |                                                     v
[Server/API] <- - - - - - - - - - [Cache/Storage] <- [Render Loop]
```

Component interactions:
1. Event listeners capture user interactions
2. State management handles data updates
3. DOM manipulation reflects state changes
4. Carousel components manage their own state
5. Tab system persists state in localStorage
6. Shuffle.js manages layout calculations
7. CSS transitions handle animations
8. Components communicate via custom events
