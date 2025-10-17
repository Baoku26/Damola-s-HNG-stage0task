# Profile Card Component

A responsive, accessible profile card component built with vanilla HTML, CSS, and JavaScript as part of a frontend development internship task.

## 📋 Overview

This project implements a testable profile card component with semantic HTML, modern CSS, and accessibility features. Every visible element includes a `data-testid` attribute for automated testing.

## ✨ Features

- **Semantic HTML** - Uses proper HTML5 semantic tags (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
- **Fully Responsive** - Adapts seamlessly to mobile, tablet, and desktop screens
- **Accessible** - Keyboard navigable with visible focus states and ARIA labels
- **Real-time Clock** - Displays current time in milliseconds using `Date.now()`
- **Social Links** - Opens in new tabs with proper security attributes
- **Test-Ready** - All elements have `data-testid` attributes for automated testing

## 🎯 Task Requirements Met

✅ Profile card root container - `data-testid="test-profile-card"`  
✅ Name (plain text) - `data-testid="test-user-name"`  
✅ Short biography - `data-testid="test-user-bio"`  
✅ Current time (milliseconds) - `data-testid="test-user-time"`  
✅ Avatar image - `data-testid="test-user-avatar"`  
✅ Social links list - `data-testid="test-user-social-links"`  
✅ Individual social links - `data-testid="test-user-social-{network}"`  
✅ Hobbies list - `data-testid="test-user-hobbies"`  
✅ Dislikes list - `data-testid="test-user-dislikes"`

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/profile-card.git
   cd profile-card
   ```

2. **Open the file**

   Simply open `profile-card.html` in your web browser:

   **Option A: Double-click**

   - Navigate to the project folder
   - Double-click on `profile-card.html`

   **Option B: Using command line**

   ```bash
   # On macOS
   open profile-card.html

   # On Linux
   xdg-open profile-card.html

   # On Windows
   start profile-card.html
   ```

   **Option C: Using a local server (recommended)**

   ```bash
   # If you have Python installed
   python -m http.server 8000
   # Then open http://localhost:8000/profile-card.html

   # Or use VS Code Live Server extension
   # Right-click on profile-card.html and select "Open with Live Server"
   ```

That's it! No npm install, no build process, no configuration needed. 🎉

## 📁 Project Structure

```
profile-card/
│
├── profile-card.html          # Main HTML file (includes CSS and JS)
└── README.md                  # Project documentation
```

## 🎨 Customization

### Change Profile Information

Open `profile-card.html` and modify the following sections:

**Name:**

```html
<h2 data-testid="test-user-name">
  Your Name Here
  <span class="verified-badge" aria-label="Verified">✓</span>
</h2>
```

**Bio:**

```html
<p data-testid="test-user-bio">Your bio description here.</p>
```

**Avatar:**

```html
<img
  src="your-image-url-here.jpg"
  alt="Your name profile photo"
  data-testid="test-user-avatar"
/>
```

**Hobbies:**

```html
<ul data-testid="test-user-hobbies">
  <li>Your Hobby 1</li>
  <li>Your Hobby 2</li>
  <!-- Add more hobbies -->
</ul>
```

**Social Links:**

```html
<a
  href="https://twitter.com/yourhandle"
  target="_blank"
  rel="noopener noreferrer"
  data-testid="test-user-social-twitter"
></a>
```

### Change Colors

Modify the CSS variables in the `<style>` section:

```css
/* Background colors */
body {
  background: #1a1a1a; /* Dark background */
}

article[data-testid="test-profile-card"] {
  background: #2a2a2a; /* Card background */
}

/* Accent color */
.verified-badge {
  background: #00c853; /* Green verified badge */
}
```

## 🧪 Testing

All interactive elements can be tested using the `data-testid` attributes:

```javascript
// Example test queries
const card = document.querySelector('[data-testid="test-profile-card"]');
const name = document.querySelector('[data-testid="test-user-name"]');
const bio = document.querySelector('[data-testid="test-user-bio"]');
const time = document.querySelector('[data-testid="test-user-time"]');
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const socialLinks = document.querySelector(
  '[data-testid="test-user-social-links"]'
);
const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Stacked layout with smaller avatar
- **Tablet**: 481px - 767px - Enhanced spacing
- **Desktop**: > 768px - Full layout with maximum width

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Visible focus indicators
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox for layout, custom properties
- **Vanilla JavaScript** - Real-time clock functionality
- **No frameworks or libraries** - Pure web technologies

## 📝 Code Quality

- Clean, readable code structure
- Inline comments for clarity
- Follows HTML5 best practices
- Mobile-first responsive design
- Cross-browser compatible

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Sophie Bennett**

- Role: Product Designer
- Focus: Simplicity & Usability

## 🤝 Contributing

This is an internship project, but suggestions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue in the repository.

---

**Note**: This project was created as part of the Frontend Wizards Stage 0 internship task to demonstrate proficiency in HTML, CSS, JavaScript, accessibility, and responsive design.
